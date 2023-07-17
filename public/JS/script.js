// this is for inventory button

const inventory = document.getElementById('inventory');
const paragraph = document.getElementById('paragraph');

const addinventoryData = () =>{
  paragraph.innerHTML = `
  <div class="jsContent container">
    <div class="leftjs">
      <h4>Inventory</h4>
      <h3>Start your accounting in a snap</h3>
      <p>Take pictures of your invoices, bills and supporting documents using Tigg.</p>
      <p>Work together with your accountant on the platform.</p>
      <p>Create transaction records easily with your uploaded documents</p>
    </div>
    <div class="rightjs">
      <img class="jsimg" src="/IMG/bill.jpeg" alt="image">
    </div>
  </div>`

}


inventory.addEventListener('click', addinventoryData);
addinventoryData();

//for accounting

const accounting = document.getElementById('accounting');
const paragraph1 = document.getElementById('paragraph');

const addAccoundData = () =>{
    paragraph.innerHTML = ` 
    <div class="jsContent container">
      <div class="leftjs">
        <h4>Accounting</h4>
        <h3>Record any type of transaction with ease</h3>
        <p>Sales Cycle dfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdrf.</p>
        <p>Purchase Cycle.</p>
        <p>Value-added tax.</p>
        <p>Journal Vouchers.</p>
      </div>
      <div class="rightjs">
        <img class="jsimg" src="/IMG/bill2.jpeg" alt="image">
      </div>
    </div> `
}

accounting.addEventListener('click', addAccoundData);


//for report
const report = document.getElementById('report');
const paragraph2 = document.getElementById('paragraph');

const reportData = () =>{
    paragraph.innerHTML = ` 
    <div class="jsContent container">
      <div class="leftjs">
        <h4>Accounting</h4>
        <h3>Record any type of transaction with ease</h3>
        <p>Sales Cycle dfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdrf.</p>
        <p>Purchase Cycle.</p>
        <p>Value-added tax.</p>
        <p>Journal Vouchers.</p>
      </div>
      <div class="rightjs">
        <img class="jsimg" src="/IMG/bill3.jpeg" alt="image">
      </div>
    </div> `
}

report.addEventListener('click', reportData);


//for productivity section

const productivity = document.getElementById('productivity');
const paragraph4 = document.getElementById('paragraph');

const productivityData = ()=>{
    paragraph4.innerHTML = `<div class="jsContent container">
    <div class="leftjs">
      <h4>Productivity</h4>
      <h3>Simplify productivity with digital tools right inside Tigg.</h3>
      <p>Sales with digital tools right inside Tigg .</p>
      <p>Purchase Cycle.</p>
      <p>Value-added tax.</p>
      <p>Journal Vouchers.</p>
    </div>
    <div class="rightjs">
      <img class="jsimg" src="/IMG/bill4.jpeg" alt="image">
    </div>
  </div> `
}


productivity.addEventListener('click', productivityData);

//for documents

const documents = document.getElementById('documents');
const paragraph5 = document.getElementById('paragraph');

const documentsData = ()=>{
    paragraph5.innerHTML = `<div class="jsContent container">
    <div class="leftjs">
      <h4>Productivity</h4>
      <h3>Simplify productivity with digital tools right inside Tigg.</h3>
      <p>Sales with digital tools right inside Tigg .</p>
      <p>Purchase Cycle.</p>
      <p>Value-added tax.</p>
      <p>Journal Vouchers.</p>
    </div>
    <div class="rightjs">
      <img class="jsimg" src="/IMG/bill5.jpeg" alt="image">
    </div>
  </div> `
}


documents.addEventListener('click', documentsData);



// ***for chart of account list show***







