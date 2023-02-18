import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PendingActionsIcon from '@mui/icons-material/PendingActions';

export function Dash() {
  return (
    <div>
      <div>
        <h2>DASH BOARD</h2>
      </div>
      <div className="toprow">

        <div className="first">
          <div className="co">EARNINGS ( MONTHLY)
            <ContentPasteIcon fontSize="large" /></div>
          <div className="val">$40,000</div>
        </div>
        <div className="sec">
          <div className="co">EARNINGS ( YEARLY)
            <AttachMoneyIcon fontSize="large" />
          </div>

          <div className="val">$215,000</div>
        </div>
        <div className="thi">
          <div className="co">TASKS
            <AssignmentIcon fontSize="large" />
          </div>
          <div className="val"></div>
          <div class="container">
            <div class="skills html">50%</div>
          </div>
        </div>
        <div className="four">
          <div className="co">PENDING TASKS
            <PendingActionsIcon fontSize="large" />
          </div>
          <div className="val">18</div>
        </div>
      </div>
   
    </div>
  );
}
