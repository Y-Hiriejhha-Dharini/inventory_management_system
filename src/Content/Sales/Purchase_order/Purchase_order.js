import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router';

const Purchase_order = () => {

    const [po_code,setPoCode] = useState("");
    const [customers,setCustomers] = useState("");
    const [cus_desc,setCusDesc] = useState("");

    const [error,setError] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        getLastPOCode();
      },[])
 
      async function getLastPOCode()
      {
         let result = await fetch("http://localhost:8000/api/purchase_order/last_po_code");
         result = await result.json();
         setPoCode(result);
         console.log(po_code);
      }

      async function getCustomer()
      {
         let result = await fetch("http://localhost:8000/api/customer/get_customer");
         result = await result.json();
         setCustomers(result);
         console.log(customers);
      }

    async function add_product(e)
    {
        e.preventDefault();
        let Purchase_order = {po_code, customers, cus_desc};
        console.warn(Purchase_order);

        const formData = new FormData();
        formData.append('po_code',po_code);
        formData.append('customers', customers);
        formData.append('cus_desc',cus_desc);

        let result = await fetch('http://localhost:8000/api/purchase_order/add_po',{
            method : "POST",
            body: formData
        }).then((res)=>{
            console.log(res);
                if(!res.ok)
                {
                    throw Error("Couldn't add the purchase order");
                }else{
                    navigate('/po_view');
                }
            }).catch((err) =>{
                setError(err.message);
            });
        result = await result.json();

        console.log(result);
    }

    return ( 
        <div className="col-md-6 m-auto bg-secondary bg-opacity-10 p-5 my-5">
            <h3 className='text-center'>Add Purchase Order</h3>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Purchase Order Code</Form.Label>
                    <Form.Control type="po_code" value={po_code} onChange={(e) => setPoCode(e.target.value)} disabled placeholder="Product Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Customer Name</Form.Label>
                    <Form.Select type="po_code" value={customers} onChange={(e) => setCustomers(e.target.value)} disabled placeholder="Product Name" >
                        <option value="">Select a Customer</option>
                    {
                        customers && customers.map((customer)=>{
                            <option value={customer['id']}>{customer['cus_name']}</option>
                        })
                    }
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Customer Description</Form.Label>
                    <Form.Control as="textarea" rows={3} value={customers['cus_desc']} onChange={(e) => setCusDesc(e.target.value)} placeholder="Product Description" />
                </Form.Group>
            
                </Form>
        </div>
     );
}
 
export default Purchase_order;