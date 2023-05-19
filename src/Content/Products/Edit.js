import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router';

const Edit = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState();
    const [proData, setProData] = useState({
        product_code : '',
        product_name : '',
        weight : '',
        price : '',
        qty : ''
    });

     useEffect(()=>{
       editProduct();
     },[])

     async function editProduct()
     {
        let result = await fetch("http://localhost:8000/api/products/edit_product/"+id);
        result = await result.json();
        setProData(result);
        console.log(result);
     }

     function getData(e)
     {
        const {name, value} = e.target;
        setProData((pre)=>{
            return {...pre,[name]:value}
        });
        console.log(name, value);
     }

    async function formSubmit(e)
    {
            e.preventDefault();
            let result = await fetch("http://localhost:8000/api/products/store_product/"+id,{
                method : 'POST',
                headers : {
                    "Content-Type" :"application/json",
                    "Accept" : "application/json"
                },
                body: JSON.stringify(proData)
            })
            // result = await result.json();
            .then((res)=>{
                if(!res.ok)
                {
                    throw Error("Product Didn't store")
                }else{
                    // console.log(res);
                    navigate('/');
                }
            }).catch((err) =>{
                setError(err.message);
            });
            console.log(result);
    }

    return ( 
        <div className="col-md-6 m-auto bg-secondary bg-opacity-10 p-5 my-5 rounded">
        <h3 >Edit Product</h3>
            <Form onSubmit={formSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Product Code</Form.Label>
                    <Form.Control type="text" value={proData['product_code']} name="product_code" onChange={getData} disabled placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" value={proData['product_name']} name='product_name' onChange={getData} placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Weight</Form.Label>
                    <Form.Control type="text" value={proData['weight']} name='weight' onChange={getData} placeholder="Enter Name" />
                </Form.Group><Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" value={proData['price']} name='price' onChange={getData} placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Qty</Form.Label>
                    <Form.Control type="text" value={proData['qty']} name='qty' onChange={getData} placeholder="Enter Qty" />
                </Form.Group>
                    {error && <div className='text-danger'>{error}</div>}
                <Button variant="primary" type="submit" className='mt-3'>
                    Submit
                </Button>
            </Form>
    </div>
     );
}
 
export default Edit;