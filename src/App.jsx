import"./App.css" 
export default function App(){
  return(
    <div>
       <Dash/>
    </div>
  );

}
function Dash(){
  return(
    <div>
      <div>
        <h2>DASH BOARD</h2>
      </div>
        <div className="toprow">

      <div className="first">
        <div>EARNINGS ( MONTHLY)</div>
        <div className="val">$40,000</div>
      </div>
      <div className="sec">
      <div>EARNINGS ( YEARLY)</div>
        <div className="val">$215,000</div>
      </div>
      <div className="thi">
      <div>TASKS</div>
        <div className="val">50%</div>
      </div>
      <div className="four">
        <div>PENDING TASKS</div>
        <div className="val">18</div>
      </div>
      </div>
  
    </div>
  );
}