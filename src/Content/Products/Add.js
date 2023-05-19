import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';

const Add = () => {

    const [product_code, setlast_product_code] = useState("");
    const [product_name, setProductName] = useState("");
    const [weight, setWeight] = useState("");
    const [price, setPrice] = useState("");
    const [qty, setQty] = useState("");
    const [file, setFile] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

     useEffect(()=>{
       getLastProdctCode();
     },[])

     async function getLastProdctCode()
     {
        let result = await fetch("http://localhost:8000/api/products/last_product_code");
        result = await result.json();
        console.log(result);
        setlast_product_code(result);
        console.log(product_code);
     }

    async function formSubmit(e)
    {
        console.log(product_code[0]);
        let data = {product_code:product_code[0], product_name, weight, price, qty};
            e.preventDefault();
            let result = await fetch("http://localhost:8000/api/products/store_product",{
                method : 'POST',
                headers : {
                    "Content-Type" :"application/json",
                    "Accept" : "application/json"
                },
                body: JSON.stringify(data)
            })
            // result = await result.json();
            .then((res)=>{
                if(!res.ok)
                {
                    throw Error("Product Didn't store")
                }else{
                    navigate('/');
                }
            }).catch((err) =>{
                setError(err.message);
            });
            console.log(result);
    }

    async function uploadFile(e)
    {
        e.preventDefault();
        let result = fetch("")
    }

    return ( 
        <div className="col-md-6 m-auto bg-secondary bg-opacity-10 p-5 my-5 rounded">
            <form action="">
                <div>
                    <Form.Control type="file" value={file} onClick={uploadFile} placeholder='Select a file to upload'/>
                </div>
            </form>
        <h3 >Add Product</h3>
            <Form onSubmit={formSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Product Code</Form.Label>
                    <Form.Control type="text" value={product_code} name="product_code"  disabled placeholder="Enter Code" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" value={product_name} onChange={(e)=>setProductName(e.target.value)} placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Weight</Form.Label>
                    <Form.Control type="text" value={weight} onChange={(e)=>setWeight(e.target.value)} placeholder="Enter Weight" />
                </Form.Group><Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Qty</Form.Label>
                    <Form.Control type="text" value={qty} onChange={(e)=>setQty(e.target.value)} placeholder="Enter Qty" />
                </Form.Group>
                {error && <div className='text-danger'>{error}</div>}

                <Button variant="primary" type="submit" className='mt-3'>
                    Submit
                </Button>
            </Form>
    </div>
     );
}
 
export default Add;