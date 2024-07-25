import './NewProduct.css';
import ProductForm from './ProductForm';

function NewProduct() {

    // passing function child to parent from NewProduct to App.js---> here NewProduct to ProductForm
    function saveProduct(product) {
        console.log("Hey, Now you ae inSide NewProduct.js...");
        console.log(product);
    }

    return (
        <div className='new-product'>

            <ProductForm onSaveProduct={saveProduct}></ProductForm>
        </div>
    )
}

export default NewProduct;