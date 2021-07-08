/* eslint-disable react-hooks/exhaustive-deps */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header(props) {
  return props.loaded ? (
    <div>
      <div className="header_container">
        <h1 className="header-title"> IP Address Tracker</h1>
        <div className="input_section">
          <form className="search-form">
            <input
              className="search-input"
              type="text"
              placeholder="Search for any IP address or domain"
              onChange={props.handleInput}
            />
            <button
              className="search-btn"
              type="submit"
              onClick={props.handleSubmit}
            >
              <FontAwesomeIcon icon="chevron-right" />
            </button>
          </form>
        </div>

        <div className="ipDetails_wrap">
          <div className="ipDetails">
            <div className="ipDetail">
              <div className="ipDetail-title">IP Address</div>
              <div className="ipDetail-info">{props.ipData.ip}</div>
            </div>
            <div className="ipDetail">
              <div className="ipDetail-title">Location</div>
              <div className="ipDetail-info">
                {props.ipData.location.city},
                {props.ipData.location.region + " "}
                {props.ipData.location.postalCode}
              </div>
            </div>
            <div className="ipDetail">
              <div className="ipDetail-title">Timezone</div>
              <div className="ipDetail-info">
                UTC {props.ipData.location.timezone}
              </div>
            </div>
            <div className="ipDetail">
              <div className="ipDetail-title">ISP</div>
              <div className="ipDetail-info">{props.ipData.isp}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default Header;
