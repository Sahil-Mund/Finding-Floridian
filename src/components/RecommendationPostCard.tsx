import React from "react";
import { Link } from "react-router-dom";

interface RecommendationPostCardProps {
  // Add your component's props here
  data: any[];
}

const RecommendationPostCard: React.FC<RecommendationPostCardProps> = ({ data }) => {
  const premiumUser = false;

  return (
    <section className="recommendation-post-section">
      <div className="container-box">
        <h2>Your Home Girl’s picks for you!</h2>
        <h1>Magnolia Heights, St Petersburg, Florida</h1>
        <p>
          Our advanced AI has analyzed your preferences and handpicked three
          exceptional properties that offer a unique blend of features that
          match your ideal Florida lifestyle.
        </p>
        <h3>Here are the top picks from your HOME GIRL.</h3>

        <div className="post-items">
          {data?.map((ele, index) => (
            <div className="post-item" key={index}>
              <div className="item-image">
                <img src={ele.image} alt={ele.title} />
                <Link to={ele.url}>
                  {" "}
                  <span> View Details </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      d="M24.9139 0.332031C31.1057 0.332031 35.2685 4.31993 35.2685 10.2493V25.4138C35.2685 31.3415 31.1057 35.3136 24.9139 35.3136H10.6239C4.44968 35.3136 0.286865 31.3415 0.286865 25.4138V10.2493C0.286865 4.31993 4.44968 0.332031 10.6239 0.332031H24.9139ZM19.2644 10.3368C18.7572 9.82954 17.9176 9.82954 17.4104 10.3368C16.9031 10.8615 16.9031 11.6836 17.4104 12.2083L21.7481 16.511H10.6414C9.90681 16.511 9.32961 17.1057 9.32961 17.8228C9.32961 18.5574 9.90681 19.1346 10.6414 19.1346H21.7481L17.4104 23.4549C17.1655 23.6997 17.0256 24.0496 17.0256 24.3819C17.0256 24.7125 17.1655 25.0465 17.4104 25.3089C17.9176 25.8161 18.7572 25.8161 19.2644 25.3089L25.8584 18.7498C26.3482 18.2601 26.3482 17.3856 25.8584 16.8958L19.2644 10.3368Z"
                      fill="#6A704C"
                    />
                  </svg>
                </Link>
              </div>

              {premiumUser || index === 0 ? (
                <div className="item-content">
                  <h2 className="item-price">{ele.price}</h2>
                  <h2 className="item-title">{ele.title}</h2>

                  <div className="item-amenities">
                    <div className="amenity amenity-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="13"
                        viewBox="0 0 11 13"
                        fill="none"
                      >
                        <path
                          d="M3.77469 11.67V9.81391C3.77469 9.34011 4.13732 8.95602 4.58465 8.95602H6.21984C6.43465 8.95602 6.64067 9.0464 6.79256 9.20729C6.94446 9.36818 7.02979 9.58638 7.02979 9.81391V11.67C7.02844 11.867 7.10136 12.0564 7.23239 12.1961C7.36342 12.3359 7.5417 12.4146 7.72768 12.4146H8.84328C9.3643 12.416 9.86445 12.1978 10.2334 11.808C10.6023 11.4183 10.8096 10.8891 10.8096 10.3373V5.04966C10.8096 4.60387 10.623 4.18102 10.3002 3.89501L6.50511 0.684672C5.84494 0.121789 4.89908 0.139963 4.25863 0.727836L0.550158 3.89501C0.212062 4.17259 0.00998594 4.59669 0 5.04966V10.3319C0 11.4821 0.880344 12.4146 1.9663 12.4146H3.05643C3.4427 12.4146 3.75661 12.0845 3.75941 11.6754L3.77469 11.67Z"
                          fill="#6A704C"
                        />
                      </svg>
                      {ele.amenitie1}
                    </div>
                    <div className="amenity amenity-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="16"
                        viewBox="0 0 15 16"
                        fill="none"
                      >
                        <path
                          d="M12.1004 2.27441H2.47244C1.98904 2.27441 1.59717 2.69252 1.59717 3.20827V13.4807C1.59717 13.9965 1.98904 14.4146 2.47244 14.4146H12.1004C12.5838 14.4146 12.9757 13.9965 12.9757 13.4807V3.20827C12.9757 2.69252 12.5838 2.27441 12.1004 2.27441Z"
                          fill="#6A704C"
                          stroke="#F5F1EE"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.28642 5.68341H3.78534V2.88184M10.7875 2.88184V5.68341H7.28642V2.88184M1.59717 8.01805H12.9757H1.59717Z"
                          fill="#6A704C"
                        />
                        <path
                          d="M7.28642 5.68341H3.78534V2.88184M7.28642 5.68341H10.7875V2.88184M7.28642 5.68341V2.88184M1.59717 8.01805H12.9757"
                          stroke="#F5F1EE"
                          stroke-width="3"
                          stroke-linecap="square"
                          stroke-linejoin="round"
                        />
                      </svg>
                      {ele.amenitie2}
                    </div>
                    <div className="amenity amenity-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="13"
                        viewBox="0 0 11 13"
                        fill="none"
                      >
                        <path
                          d="M5.06044 0.880859C5.18586 0.880878 5.3069 0.932726 5.40062 1.02657C5.49434 1.12041 5.55422 1.24972 5.56889 1.38997L5.57248 1.45743V2.75473C5.57233 2.90168 5.52236 3.04303 5.43277 3.14989C5.34318 3.25675 5.22073 3.32106 5.09045 3.32967C4.96017 3.33828 4.83188 3.29055 4.7318 3.19623C4.63173 3.10191 4.56741 2.96811 4.55199 2.82219L4.54841 2.75473V2.03401H3.52434C3.39893 2.03403 3.27788 2.08587 3.18416 2.17972C3.09044 2.27356 3.03057 2.40287 3.0159 2.54312L3.01231 2.61058V6.07003H9.66874C9.9271 6.06994 10.1759 6.17981 10.3654 6.37763C10.5548 6.57545 10.6709 6.84659 10.6902 7.13669L10.6928 7.22318V8.9529C10.6928 9.80335 10.3661 10.5673 9.8459 11.0949L10.0947 11.5158C10.1678 11.6382 10.1964 11.7874 10.1748 11.9328C10.1531 12.0783 10.0828 12.2088 9.97824 12.2976C9.87372 12.3865 9.74294 12.4268 9.6128 12.4104C9.48266 12.394 9.36305 12.3221 9.27857 12.2094L9.24273 12.1558L8.96111 11.6813C8.74009 11.7663 8.50974 11.8167 8.27652 11.8312L8.13264 11.8358H3.01231C2.73031 11.8361 2.4502 11.7839 2.18333 11.6813L1.90222 12.1558C1.82981 12.2783 1.71851 12.365 1.59115 12.3981C1.46379 12.4312 1.33001 12.4082 1.21722 12.3339C1.10443 12.2595 1.02117 12.1393 0.984497 11.9981C0.947827 11.8568 0.960527 11.7051 1.01999 11.574L1.0502 11.5164L1.29905 11.0955C1.04879 10.8422 0.845451 10.5357 0.700725 10.1936C0.555999 9.85155 0.47274 9.48065 0.455733 9.10223L0.452148 8.9529V7.22318C0.452067 6.93225 0.549643 6.65204 0.725316 6.43872C0.90099 6.2254 1.14178 6.09473 1.39941 6.07291L1.47621 6.07003H1.98825V2.61058C1.98822 2.16938 2.13793 1.74485 2.40672 1.42384C2.67552 1.10284 3.04309 0.909626 3.43423 0.883742L3.52434 0.880859H5.06044Z"
                          fill="#6A704C"
                        />
                      </svg>
                      {ele.amenitie3}
                    </div>
                    <div className="amenity amenity-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="14"
                        viewBox="0 0 11 14"
                        fill="none"
                      >
                        <path
                          d="M5.495 0C8.51161 0 10.9985 2.56637 10.9985 5.74155C10.9985 7.34156 10.4531 8.82699 9.55542 10.086C8.5651 11.4748 7.3445 12.6848 5.97059 13.6346C5.65614 13.8541 5.37235 13.8707 5.02725 13.6346C3.6455 12.6848 2.4249 11.4748 1.44307 10.086C0.544738 8.82699 0 7.34156 0 5.74155C0 2.56637 2.48687 0 5.495 0ZM5.495 3.98761C4.49751 3.98761 3.68399 4.86492 3.68399 5.92033C3.68399 6.98401 4.49751 7.8206 5.495 7.8206C6.49314 7.8206 7.31449 6.98401 7.31449 5.92033C7.31449 4.86492 6.49314 3.98761 5.495 3.98761Z"
                          fill="#6A704C"
                        />
                      </svg>
                      {ele.amenitie4}
                    </div>
                  </div>
                </div>
              ) : (
               <>
                  <div className="btn-unlock">
                    <span>Unlock Premium Insights</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="31"
                      height="36"
                      viewBox="0 0 31 36"
                      fill="none"
                    >
                      <g filter="url(#filter0_di_960_618)">
                        <path
                          d="M2 16C2 13.2386 4.23858 11 7 11H20C22.7614 11 25 13.2386 25 16V20C25 25.5228 20.5228 30 15 30H12C6.47715 30 2 25.5228 2 20V16Z"
                          fill="#6A704C"
                        />
                        <path
                          d="M19 20V8.67088C19 6.37195 17.5396 4.32692 15.3651 3.58089V3.58089C14.2659 3.20379 13.0742 3.19263 11.9681 3.54909L11.8936 3.5731C9.57303 4.32099 8 6.48067 8 8.91881V12.2234"
                          stroke="#6A704C"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_di_960_618"
                          x="0"
                          y="0.290039"
                          width="31"
                          height="35.71"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dx="2" dy="2" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_960_618"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_960_618"
                            result="shape"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dx="2" dy="2" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite
                            in2="hardAlpha"
                            operator="arithmetic"
                            k2="-1"
                            k3="1"
                          />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.909804 0 0 0 0 0.870588 0 0 0 0 0.835294 0 0 0 0.1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect2_innerShadow_960_618"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
               <div className="item-content dummy-content">
                  <h2 className="item-price">$4,600</h2>
                  <h2 className="item-title">Magnolia Heights</h2>

                  <div className="item-amenities">
                    <div className="amenity amenity-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="13"
                        viewBox="0 0 11 13"
                        fill="none"
                      >
                        <path
                          d="M3.77469 11.67V9.81391C3.77469 9.34011 4.13732 8.95602 4.58465 8.95602H6.21984C6.43465 8.95602 6.64067 9.0464 6.79256 9.20729C6.94446 9.36818 7.02979 9.58638 7.02979 9.81391V11.67C7.02844 11.867 7.10136 12.0564 7.23239 12.1961C7.36342 12.3359 7.5417 12.4146 7.72768 12.4146H8.84328C9.3643 12.416 9.86445 12.1978 10.2334 11.808C10.6023 11.4183 10.8096 10.8891 10.8096 10.3373V5.04966C10.8096 4.60387 10.623 4.18102 10.3002 3.89501L6.50511 0.684672C5.84494 0.121789 4.89908 0.139963 4.25863 0.727836L0.550158 3.89501C0.212062 4.17259 0.00998594 4.59669 0 5.04966V10.3319C0 11.4821 0.880344 12.4146 1.9663 12.4146H3.05643C3.4427 12.4146 3.75661 12.0845 3.75941 11.6754L3.77469 11.67Z"
                          fill="#6A704C"
                        />
                      </svg>
                      2-3 Guests
                    </div>
                    <div className="amenity amenity-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="16"
                        viewBox="0 0 15 16"
                        fill="none"
                      >
                        <path
                          d="M12.1004 2.27441H2.47244C1.98904 2.27441 1.59717 2.69252 1.59717 3.20827V13.4807C1.59717 13.9965 1.98904 14.4146 2.47244 14.4146H12.1004C12.5838 14.4146 12.9757 13.9965 12.9757 13.4807V3.20827C12.9757 2.69252 12.5838 2.27441 12.1004 2.27441Z"
                          fill="#6A704C"
                          stroke="#F5F1EE"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.28642 5.68341H3.78534V2.88184M10.7875 2.88184V5.68341H7.28642V2.88184M1.59717 8.01805H12.9757H1.59717Z"
                          fill="#6A704C"
                        />
                        <path
                          d="M7.28642 5.68341H3.78534V2.88184M7.28642 5.68341H10.7875V2.88184M7.28642 5.68341V2.88184M1.59717 8.01805H12.9757"
                          stroke="#F5F1EE"
                          stroke-width="3"
                          stroke-linecap="square"
                          stroke-linejoin="round"
                        />
                      </svg>
                      1 Bedroom
                    </div>
                    <div className="amenity amenity-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="13"
                        viewBox="0 0 11 13"
                        fill="none"
                      >
                        <path
                          d="M5.06044 0.880859C5.18586 0.880878 5.3069 0.932726 5.40062 1.02657C5.49434 1.12041 5.55422 1.24972 5.56889 1.38997L5.57248 1.45743V2.75473C5.57233 2.90168 5.52236 3.04303 5.43277 3.14989C5.34318 3.25675 5.22073 3.32106 5.09045 3.32967C4.96017 3.33828 4.83188 3.29055 4.7318 3.19623C4.63173 3.10191 4.56741 2.96811 4.55199 2.82219L4.54841 2.75473V2.03401H3.52434C3.39893 2.03403 3.27788 2.08587 3.18416 2.17972C3.09044 2.27356 3.03057 2.40287 3.0159 2.54312L3.01231 2.61058V6.07003H9.66874C9.9271 6.06994 10.1759 6.17981 10.3654 6.37763C10.5548 6.57545 10.6709 6.84659 10.6902 7.13669L10.6928 7.22318V8.9529C10.6928 9.80335 10.3661 10.5673 9.8459 11.0949L10.0947 11.5158C10.1678 11.6382 10.1964 11.7874 10.1748 11.9328C10.1531 12.0783 10.0828 12.2088 9.97824 12.2976C9.87372 12.3865 9.74294 12.4268 9.6128 12.4104C9.48266 12.394 9.36305 12.3221 9.27857 12.2094L9.24273 12.1558L8.96111 11.6813C8.74009 11.7663 8.50974 11.8167 8.27652 11.8312L8.13264 11.8358H3.01231C2.73031 11.8361 2.4502 11.7839 2.18333 11.6813L1.90222 12.1558C1.82981 12.2783 1.71851 12.365 1.59115 12.3981C1.46379 12.4312 1.33001 12.4082 1.21722 12.3339C1.10443 12.2595 1.02117 12.1393 0.984497 11.9981C0.947827 11.8568 0.960527 11.7051 1.01999 11.574L1.0502 11.5164L1.29905 11.0955C1.04879 10.8422 0.845451 10.5357 0.700725 10.1936C0.555999 9.85155 0.47274 9.48065 0.455733 9.10223L0.452148 8.9529V7.22318C0.452067 6.93225 0.549643 6.65204 0.725316 6.43872C0.90099 6.2254 1.14178 6.09473 1.39941 6.07291L1.47621 6.07003H1.98825V2.61058C1.98822 2.16938 2.13793 1.74485 2.40672 1.42384C2.67552 1.10284 3.04309 0.909626 3.43423 0.883742L3.52434 0.880859H5.06044Z"
                          fill="#6A704C"
                        />
                      </svg>
                      1 Private Bath
                    </div>
                    <div className="amenity amenity-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="14"
                        viewBox="0 0 11 14"
                        fill="none"
                      >
                        <path
                          d="M5.495 0C8.51161 0 10.9985 2.56637 10.9985 5.74155C10.9985 7.34156 10.4531 8.82699 9.55542 10.086C8.5651 11.4748 7.3445 12.6848 5.97059 13.6346C5.65614 13.8541 5.37235 13.8707 5.02725 13.6346C3.6455 12.6848 2.4249 11.4748 1.44307 10.086C0.544738 8.82699 0 7.34156 0 5.74155C0 2.56637 2.48687 0 5.495 0ZM5.495 3.98761C4.49751 3.98761 3.68399 4.86492 3.68399 5.92033C3.68399 6.98401 4.49751 7.8206 5.495 7.8206C6.49314 7.8206 7.31449 6.98401 7.31449 5.92033C7.31449 4.86492 6.49314 3.98761 5.495 3.98761Z"
                          fill="#6A704C"
                        />
                      </svg>
                      Central Florida
                    </div>
                  </div>

                 
                </div>

             
               </>
                
              )}
            </div>
          ))}
        </div>

        <div className="bottom-section">
          <button>Talk with your Home Girl</button>
          <p>Not happy with the results?</p>
        </div>
      </div>
    </section>
  );
};

export default RecommendationPostCard;