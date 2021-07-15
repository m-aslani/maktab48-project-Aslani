import React,{useEffect,useState} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useSelector, useDispatch } from "react-redux";
import { getProducts} from "../redux/actions/productActions";
import { useGridApiRef, XGrid } from '@material-ui/x-grid';
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import {editProduct} from "../redux/actions/productActions";


const defaultTheme = createMuiTheme();
const useStyles = makeStyles(
  (theme) => ({
    root: {
      justifyContent: 'center',
      display: 'flex',
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  }),
  { defaultTheme },
);

function EditToolbar(props) {
  const { selectedCellParams, apiRef, setSelectedCellParams } = props;
  const classes = useStyles();

  const handleClick = () => {
    if (!selectedCellParams) {
      return;
    }
    const { id, field, cellMode } = selectedCellParams;
    if (cellMode === 'edit') {
      const editedCellProps = apiRef.current.getEditCellPropsParams(id, field);
      apiRef.current.commitCellChange(editedCellProps);
      apiRef.current.setCellMode(id, field, 'view');
      setSelectedCellParams({ ...selectedCellParams, cellMode: 'view' });
    } else {
      apiRef.current.setCellMode(id, field, 'edit');
      setSelectedCellParams({ ...selectedCellParams, cellMode: 'edit' });
    }
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <Button
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        disabled={!selectedCellParams}
        color="primary"
      >
        {selectedCellParams?.cellMode === 'edit' ? 'ذخیره' : 'ویرایش'}
      </Button>
    </div>
  );
}

EditToolbar.propTypes = {
  apiRef: PropTypes.shape({
    current: PropTypes.object.isRequired,
  }).isRequired,
  selectedCellParams: PropTypes.any,
  setSelectedCellParams: PropTypes.func.isRequired,
};

const columns = [
    { field: 'title', headerName: 'نام کالا', width: 1080, editable: false },
    { field: 'price', headerName: 'قیمت', type: 'number', editable: true },
    {
      field: 'available',
      headerName: 'موجودی',
      type: 'number',
      width: 180,
      editable: true,
    //   valueFormatter: ({ value }) => currencyFormatter.format(Number(value)),
    },
  ];

  const PriceTable = ({handleSave}) => {
      const products = useSelector((state) => state.allProducts.products);
      const dispatch = useDispatch();
      const apiRef = useGridApiRef();
      const [selectedCellParams, setSelectedCellParams] = useState({});
      const [selectedProduct, setSelectedProduct] = useState({});
      let priceAndN = {};
      useEffect(() => {
          dispatch(getProducts());
        }, []);

        useEffect(() => {
          if(selectedCellParams.cellMode === "edit"){
            // console.log(selectedCellParams);
            
            products.map((product,index)=>{
              if(product.id === selectedCellParams.row.id){
                 priceAndN = {
                  "id": product.id,
                  "price": selectedCellParams.row.price,
                  // "number":selectedCellParams.row.number,
                  "title" : product.title,
                  "category": product.category,
                  "description" : product.description,
                  "image" : product.image
                }
              }
            })
            console.log(selectedCellParams.row.price);
            console.log(priceAndN.price);
            dispatch(editProduct(priceAndN));
          }
        }, [selectedCellParams])
      
        const handleCellClick = React.useCallback((params) => {
          setSelectedCellParams(params);
        }, []);
      
        const handleDoubleCellClick = React.useCallback((params, event) => {
          event.stopPropagation();
        }, []);
      
        // Prevent from rolling back on escape
        const handleCellKeyDown = React.useCallback((params, event) => {
          if (['Escape', 'Delete', 'Backspace', 'Enter'].includes(event.key)) {
            event.stopPropagation();
          }
        }, []);
      
        // Prevent from committing on focus out
        const handleCellFocusOut = React.useCallback((params, event) => {
          if (params.cellMode === 'edit' && event) {
            event.defaultMuiPrevented = true;
          }
        }, []);

    return (
        <div style={{ height: 300, width: '100%' }}>
          <XGrid
          rows={products} 
          columns={columns} 
          // onCellValueChange={(e)=>handleSave(e)}
          apiRef={apiRef}
          onCellClick={handleCellClick}
          onCellDoubleClick={handleDoubleCellClick}
          onCellFocusOut={handleCellFocusOut}
          onCellKeyDown={handleCellKeyDown}
          components={{
            Toolbar: EditToolbar,
          }}
          componentsProps={{
            toolbar: {
              selectedCellParams,
              apiRef,
              setSelectedCellParams,
            },
          }}
          />
        </div>
      );
}
export default PriceTable;