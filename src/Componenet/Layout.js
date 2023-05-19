import Footer from './Footer.js'; 
import NavBar from '../Componenet/NavBar.js'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AddProduct from '../Content/Products/Add.js';
import EditProduct from '../Content/Products/Edit.js';
import Inventory from '../Content/Sales/Inventory/View_Delete.js';

import Excel_Stock_Report from '../Content/Sales/Inventory/Reports/Excel/Stock_Report.js';
import Excel_Non_Stock_Report from '../Content/Sales/Inventory/Reports/Excel/Non_Stock_Report.js';
import Pdf_Stock_Report from '../Content/Sales/Inventory/Reports/Pdf/Stock_Report.js';
import Pdf_Non_Stock_Report from '../Content/Sales/Inventory/Reports/Pdf/Non_Stock_Report.js';

import Purchase_order from '../Content/Sales/Purchase_order/Purchase_order.js';
import View_purchase_order from '../Content/Sales/Purchase_order/View_purchase_order.js';
import PO_Confirm from '../Content/Sales/Purchase_order/PO_Confirm.js';
import Billing from '../Content/Sales/Purchase_order/Billing.js';
import Sales_Order from '../Content/Sales/Sales_order/Sales_Order.js';
import SO_Confirm from '../Content/Sales/Sales_order/SO_Confirm.js';
import Invoice from '../Content/Sales/Sales_order/Invoice.js';
import Protected from '../Componenet/Protected.js';

import Register from '../Componenet/Register.js';
import Login from '../Componenet/Login.js';

const Layout = ({content}) => {
    return ( 
        <>
            <div>
                <section>
                    <Router>
                        <NavBar/>
                            <Routes>
                                <Route path='/' exact element={<Inventory/>}></Route>
                                <Route path='/add_product' element={<Protected Page={AddProduct}/>}></Route>
                                <Route path='/edit_product/:id' element={<Protected Page={EditProduct}/>}></Route>

                                <Route path='/po_add' element={<Protected Page={Purchase_order}/>}></Route>
                                <Route path='/po_view' element={<Protected Page={View_purchase_order}/>}></Route>
                                {/* <Route path='/po_edit' element={<Protected Page={Edit_purchase_order}/>}></Route> */}

                                <Route path='/stock_excel' element={<Protected Page={Excel_Stock_Report}/>}></Route>
                                <Route path='/non_stock_excel' element={<Protected Page={Excel_Non_Stock_Report}/>}></Route>
                                <Route path='/stock_pdf' element={<Protected Page={Pdf_Stock_Report}/>}></Route>
                                <Route path='/non_stock_pdf' element={<Protected Page={Pdf_Non_Stock_Report}/>}></Route>

                                <Route path='/po_confirm' element={<Protected Page={PO_Confirm}/>}></Route>
                                <Route path='/billing' element={<Protected Page={Billing}/>}></Route>

                                <Route path='/sales_order' element={<Protected Page={Sales_Order}/>}></Route>
                                <Route path='/so_confirm' element={<Protected Page={SO_Confirm}/>}></Route>
                                <Route path='/invoice' element={<Protected Page={Invoice}/>}></Route>

                                <Route path='/register' element={<Register/>}></Route>
                                <Route path='/login' element={<Login/>}></Route>
                            </Routes>
                    </Router>
                </section>
                <section>
                    <main className='content'>
                        {content}
                    </main>
                </section>
                <section>
                    <Footer/>
                </section>
            </div>
        </>
     );
}
 
export default Layout;