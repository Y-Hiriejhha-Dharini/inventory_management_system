import { useEffect, useState } from 'react';
import {Table, Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const View_Delete = () => {

    let [products, setProducts] = useState("");

    useEffect(()=>{
        products_details();
    },[])
    
    const products_details = (async ()=>{
        let result = await fetch("http://localhost:8000/api/inventory/view");
        result = await result.json();
        setProducts(result);
        console.log(result);
    });

    const deleteProduct = (async (id)=>{
        let result = await fetch("http://localhost:8000/api/products/delete_product/"+id);
        result = await result.json();
        products_details();
        console.log(result);
    })

    return ( 
        <Container>
            { products.length > 0 ?
                <div>
                    <h5>Inventory</h5>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Product Code</th>
                                <th>Product Name</th>
                                <th>Qty</th>
                                <th>Weight</th>
                                <th>Price</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products && products.map((product,i)=>(
                                    <tr key={i}>
                                        <td>{product['product_code']}</td>
                                        <td>{product['product_name']}</td>
                                        <td>{product['qty']}</td>
                                        <td>{product['weight']}</td>
                                        <td>{product['price']}</td>
                                        <td>
                                            <Link to={'/edit_product/'+product['id']} className='btn btn-success me-2' type='submit'>EDIT</Link>
                                            <Link onClick={()=>{deleteProduct(product['id'])}} className='btn btn-danger' type='submit'>DELETE</Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div> :
                <div className='nothing_msg'>
                    <Link to={'/add_product'} className='btn btn-success mb-5'>Add Product</Link>
                    <h4>No Products to show</h4>
                </div>
            }
        </Container>
     );
}
 
export default View_Delete;