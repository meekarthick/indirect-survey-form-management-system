import React, { useState } from "react";
import parentloginimage3 from "../../assets/images/parentloginimage3.jpg";

const PhoneAuth = () => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");

  return (
    <div className="parentLogin_head_div">
      <div className="parentLogin_div">
        <div className="loginimage_div">
          <img src={parentloginimage3} alt="Parent Login" />
        </div>
        <div className="parentloginform-div">
          <form className="parentloginform">
            <div className="parentLogin_head">
              <h3>Parent Login</h3>
            </div>

            {/* Mobile Number Input */}
            <div className="parentLoginInner_div1">
              <label className="mobileinput" htmlFor="mobile">
                <span>Mobile Number</span>
              </label>
              <input
                type="text"
                className="parentinput"
                name="mobile"
                placeholder="10 digit mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
               <button type="button" className="send-btn">Send OTP</button>
            </div>

            {/* OTP Input */}
            <div className="parentLoginInner_div1">
              <label className="mobileinput" htmlFor="otp">
                <span>Enter OTP</span>
              </label>
              <input
                type="text"
                className="parentinput"
                name="otp"
                placeholder="Received OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
                <button type="button"  className="verify-btn">Verify OTP</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PhoneAuth;
