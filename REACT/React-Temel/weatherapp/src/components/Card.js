import { useContext, useState, useEffect } from 'react'
import WeatherContext from '../context/WeatherContext'


function Card() {

    const { weather, icon, setIcon } = useContext(WeatherContext);
    var today = new Date();
    const [days] = useState(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);

    const getDayName = () => {

        return days[today.getDay()]
    }
    // let isNight = false;

    // if(weather){
    //     var unixSunrise=weather.data.city.sunrise;
    //     unixSunrise=unixSunrise*1000;
    //     console.log(unixSunrise)
    //     var unixSunset=weather.data.city.sunset;
    //     unixSunset=unixSunset*1000;
    //     console.log(unixSunset)
    // }

    // let currentTime = new Date().getTime()


    // const findTime = () => {

    //     if (currentTime >= unixSunrise  ) {
    //         if(currentTime < unixSunset){
    //             isNight = false; 
    //         }
    //     }else{
    //         isNight=true;
    //     }
    //     return isNight;
    // }
    // console.log(currentTime)
    // console.log(isNight)


    const rain = () => {
        return (
            <div className="elements">
                <div className="element">
                    <svg version="1.1" id="Layer_1" xmlnsXlink="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 55.1 60" style={{ enableBackground: "new 0 0 55.1 49.5" }} xmlSpace="preserve">
                        <g id="Cloud_2">
                            <g id="Rain_2">
                                <path id="rain_2_left" className="white" d="M20.7,46.4c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1c0-1.7,3.1-7.8,3.1-7.8 S20.7,44.7,20.7,46.4z"></path>
                                <path id="rain_2_mid" className="white" d="M31.4,46.4c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,3.1-7.8,3.1-7.8 S31.4,44.7,31.4,46.4z"></path>
                                <path id="rain_2_right" className="white" d="M41.3,46.4c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,3.1-7.8,3.1-7.8 S41.3,44.7,41.3,46.4z"></path>
                                <animateTransform attributeName="transform"
                                    attributeType="XML"
                                    dur="1s"
                                    keyTimes="0;1"
                                    repeatCount="indefinite"
                                    type="translate"
                                    values="0 0;0 10"
                                    calcMode="linear">
                                </animateTransform>
                                <animate attributeType="CSS"
                                    attributeName="opacity"
                                    attributeType="XML"
                                    dur="1s"
                                    keyTimes="0;1"
                                    repeatCount="indefinite"
                                    values="1;0"
                                    calcMode="linear" />
                            </g>
                            <g id="White_cloud_2">
                                <path id="XMLID_14_" className="white" d="M47.2,34.5H7.9c-4.3,0-7.9-3.5-7.9-7.9l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9 v0C55.1,30.9,51.6,34.5,47.2,34.5z" />
                                <circle id="XMLID_13_" className="white" cx="17.4" cy="17.3" r="9.3" />
                                <circle id="XMLID_10_" className="white" cx="34.5" cy="15.6" r="15.6" />
                            </g>
                        </g>
                    </svg>
                </div></div>
        )
    }
    const cloudy = () => {
        return (
            <div className="elements">
                <div className="element">
                    <div className="element">
                        <svg version="1.1" id="Layer_1" xmlnsXlink="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60.7 40" style={{ enableBackground: "new 0 0 60.7 40" }} xmlSpace="preserve">
                            <g id="Cloud_1">
                                <g id="White_cloud_1">
                                    <path id="XMLID_2_" className="white" d="M47.2,40H7.9C3.5,40,0,36.5,0,32.1l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9v0 C55.1,36.5,51.6,40,47.2,40z" />
                                    <circle id="XMLID_3_" className="white" cx="17.4" cy="22.8" r="9.3" />
                                    <circle id="XMLID_4_" className="white" cx="34.5" cy="21.1" r="15.6" />
                                    <animateTransform attributeName="transform"
                                        attributeType="XML"
                                        dur="6s"
                                        keyTimes="0;0.5;1"
                                        repeatCount="indefinite"
                                        type="translate"
                                        values="0;5;0"
                                        calcMode="linear">
                                    </animateTransform>
                                </g>
                                <g id="Gray_cloud_1">
                                    <path id="XMLID_6_" className="gray" d="M54.7,22.3H33.4c-3.3,0-6-2.7-6-6v0c0-3.3,2.7-6,6-6h21.3c3.3,0,6,2.7,6,6v0 C60.7,19.6,58,22.3,54.7,22.3z" />
                                    <circle id="XMLID_7_" className="gray" cx="45.7" cy="10.7" r="10.7" />
                                    <animateTransform attributeName="transform"
                                        attributeType="XML"
                                        dur="6s"
                                        keyTimes="0;0.5;1"
                                        repeatCount="indefinite"
                                        type="translate"
                                        values="0;-3;0"
                                        calcMode="linear">
                                    </animateTransform>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>)
    }

    const cloudyWithSun = () => {
        return (
            <div className="elements"><div className="element">
                <svg version="1.1" id="Layer_1" xmlnsXlink="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 61.7 42.8" style={{ enableBackground: "new 0 0 61.7 42.8" }} xmlSpace="preserve">
                    <g id="Cloud_3">
                        <g id="White_cloud_3">
                            <path id="XMLID_24_" className="white" d="M47.2,42.8H7.9c-4.3,0-7.9-3.5-7.9-7.9l0,0C0,30.5,3.5,27,7.9,27h39.4c4.3,0,7.9,3.5,7.9,7.9 v0C55.1,39.2,51.6,42.8,47.2,42.8z" />
                            <circle id="XMLID_23_" className="white" cx="17.4" cy="25.5" r="9.3" />
                            <circle id="XMLID_22_" className="white" cx="34.5" cy="23.9" r="15.6" />
                            <animateTransform attributeName="transform"
                                attributeType="XML"
                                dur="6s"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                type="translate"
                                values="0;5;0"
                                calcMode="linear">
                            </animateTransform>
                        </g>
                        <g id="Sun_3">
                            <circle id="XMLID_30_" className="yellow" cx="31.4" cy="18.5" r="9" />
                            <g>
                                <path id="XMLID_31_" className="yellow" d="M31.4,6.6L31.4,6.6c-0.4,0-0.6-0.3-0.6-0.6V0.6C30.8,0.3,31,0,31.3,0l0.1,0 C31.7,0,32,0.3,32,0.6v5.5C32,6.4,31.7,6.6,31.4,6.6z" />
                                <path id="XMLID_34_" className="yellow" d="M31.4,30.1L31.4,30.1c-0.4,0-0.6,0.3-0.6,0.6v5.5c0,0.3,0.3,0.6,0.6,0.6h0.1 c0.3,0,0.6-0.3,0.6-0.6v-5.5C32,30.4,31.7,30.1,31.4,30.1z" />
                                <path id="XMLID_35_" className="yellow" d="M19.6,18.3L19.6,18.3c0,0.4-0.3,0.6-0.6,0.6h-5.5c-0.3,0-0.6-0.3-0.6-0.6v-0.1 c0-0.3,0.3-0.6,0.6-0.6H19C19.3,17.8,19.6,18,19.6,18.3z" />
                                <path id="XMLID_33_" className="yellow" d="M43.1,18.3L43.1,18.3c0,0.4,0.3,0.6,0.6,0.6h5.5c0.3,0,0.6-0.3,0.6-0.6v-0.1 c0-0.3-0.3-0.6-0.6-0.6h-5.5C43.4,17.8,43.1,18,43.1,18.3z" />
                                <path id="XMLID_37_" className="yellow" d="M22.4,26L22.4,26c0.3,0.3,0.2,0.7,0,0.9l-4.2,3.6c-0.2,0.2-0.6,0.2-0.8-0.1l-0.1-0.1 c-0.2-0.2-0.2-0.6,0.1-0.8l4.2-3.6C21.9,25.8,22.2,25.8,22.4,26z" />
                                <path id="XMLID_36_" className="yellow" d="M40.3,10.7L40.3,10.7c0.3,0.3,0.6,0.3,0.8,0.1l4.2-3.6c0.2-0.2,0.3-0.6,0.1-0.8l-0.1-0.1 c-0.2-0.2-0.6-0.3-0.8-0.1l-4.2,3.6C40.1,10.1,40,10.5,40.3,10.7z" />
                                <path id="XMLID_39_" className="yellow" d="M22.4,10.8L22.4,10.8c0.3-0.3,0.2-0.7,0-0.9l-4.2-3.6c-0.2-0.2-0.6-0.2-0.8,0.1l-0.1,0.1 c-0.2,0.2-0.2,0.6,0.1,0.8l4.2,3.6C21.9,11,22.2,11,22.4,10.8z" />
                                <path id="XMLID_38_" className="yellow" d="M40.3,26.1L40.3,26.1c0.3-0.3,0.6-0.3,0.8-0.1l4.2,3.6c0.2,0.2,0.3,0.6,0.1,0.8l-0.1,0.1 c-0.2,0.2-0.6,0.3-0.8,0.1l-4.2-3.6C40.1,26.7,40,26.3,40.3,26.1z" />
                                <animate attributeType="CSS"
                                    attributeName="opacity"
                                    attributeType="XML"
                                    dur="0.5s"
                                    keyTimes="0;0.5;1"
                                    repeatCount="indefinite"
                                    values="1;0.6;1"
                                    calcMode="linear" />
                            </g>
                        </g>
                        <animateTransform attributeName="transform"
                            attributeType="XML"
                            dur="2s"
                            keyTimes="0;1"
                            repeatCount="indefinite"
                            type="scale"
                            values="1;1"
                            calcMode="linear">
                        </animateTransform>
                    </g>
                    <g id="Gray_cloud_3">
                        <path id="XMLID_20_" className="gray" d="M55.7,25.1H34.4c-3.3,0-6-2.7-6-6v0c0-3.3,2.7-6,6-6h21.3c3.3,0,6,2.7,6,6v0 C61.7,22.4,59,25.1,55.7,25.1z" />
                        <circle id="XMLID_19_" className="gray" cx="46.7" cy="13.4" r="10.7" />
                        <animateTransform attributeName="transform"
                            attributeType="XML"
                            dur="6s"
                            keyTimes="0;0.5;1"
                            repeatCount="indefinite"
                            type="translate"
                            values="0;-3;0"
                            calcMode="linear">
                        </animateTransform>
                    </g>
                </svg>
            </div></div>)

    }

    const sunny = () => {
        return (
            <div className="elements"><div className="element">
                <svg version="1.1" id="Layer_1" xmlnsXlink="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 44.9 44.9" style={{ enableBackground: "new 0 0 44.9 44.9" }} xmlSpace="preserve" height="40px" width="40px">
                    <g id="Sun">
                        <circle id="XMLID_61_" className="yellow" cx="22.4" cy="22.6" r="11" />
                        <g>
                            <path id="XMLID_60_" className="yellow" d="M22.6,8.1h-0.3c-0.3,0-0.6-0.3-0.6-0.6v-7c0-0.3,0.3-0.6,0.6-0.6l0.3,0c0.3,0,0.6,0.3,0.6,0.6 v7C23.2,7.8,22.9,8.1,22.6,8.1z" />
                            <path id="XMLID_59_" className="yellow" d="M22.6,36.8h-0.3c-0.3,0-0.6,0.3-0.6,0.6v7c0,0.3,0.3,0.6,0.6,0.6h0.3c0.3,0,0.6-0.3,0.6-0.6v-7 C23.2,37,22.9,36.8,22.6,36.8z" />
                            <path id="XMLID_58_" className="yellow" d="M8.1,22.3v0.3c0,0.3-0.3,0.6-0.6,0.6h-7c-0.3,0-0.6-0.3-0.6-0.6l0-0.3c0-0.3,0.3-0.6,0.6-0.6h7 C7.8,21.7,8.1,21.9,8.1,22.3z" />
                            <path id="XMLID_57_" className="yellow" d="M36.8,22.3v0.3c0,0.3,0.3,0.6,0.6,0.6h7c0.3,0,0.6-0.3,0.6-0.6v-0.3c0-0.3-0.3-0.6-0.6-0.6h-7 C37,21.7,36.8,21.9,36.8,22.3z" />
                            <path id="XMLID_56_" className="yellow" d="M11.4,31.6l0.2,0.3c0.2,0.2,0.2,0.6-0.1,0.8l-5.3,4.5c-0.2,0.2-0.6,0.2-0.8-0.1l-0.2-0.3 c-0.2-0.2-0.2-0.6,0.1-0.8l5.3-4.5C10.9,31.4,11.2,31.4,11.4,31.6z" />
                            <path id="XMLID_55_" className="yellow" d="M33.2,13l0.2,0.3c0.2,0.2,0.6,0.3,0.8,0.1l5.3-4.5c0.2-0.2,0.3-0.6,0.1-0.8l-0.2-0.3 c-0.2-0.2-0.6-0.3-0.8-0.1l-5.3,4.5C33,12.4,33,12.7,33.2,13z" />
                            <path id="XMLID_54_" className="yellow" d="M11.4,13.2l0.2-0.3c0.2-0.2,0.2-0.6-0.1-0.8L6.3,7.6C6.1,7.4,5.7,7.5,5.5,7.7L5.3,7.9 C5.1,8.2,5.1,8.5,5.4,8.7l5.3,4.5C10.9,13.5,11.2,13.5,11.4,13.2z" />
                            <path id="XMLID_53_" className="yellow" d="M33.2,31.9l0.2-0.3c0.2-0.2,0.6-0.3,0.8-0.1l5.3,4.5c0.2,0.2,0.3,0.6,0.1,0.8l-0.2,0.3 c-0.2,0.2-0.6,0.3-0.8,0.1l-5.3-4.5C33,32.5,33,32.1,33.2,31.9z" />
                            <animate attributeType="CSS"
                                attributeName="opacity"
                                attributeType="XML"
                                dur="0.5s"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                values="1;0.6;1"
                                calcMode="linear" />
                        </g>
                    </g>
                </svg>
            </div></div>)

    }

    const cloudyWithThunderm = () => {
        return (
            <div className="elements">
                <div className="element">
                    <svg version="1.1" id="Layer_1" xmlnsXlink="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60.7 48.7" style={{ enableBackground: "new 0 0 60.7 48.7" }} xmlSpace="preserve">
                        <g id="Cloud_4">
                            <g id="White_cloud_4">
                                <path id="XMLID_69_" className="white" d="M47.2,40H7.9C3.5,40,0,36.5,0,32.1l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9v0 C55.1,36.5,51.6,40,47.2,40z" />
                                <circle id="XMLID_68_" className="white" cx="17.4" cy="22.8" r="9.3" />
                                <circle id="XMLID_67_" className="white" cx="34.5" cy="21.1" r="15.6" />
                                <animateTransform attributeName="transform"
                                    attributeType="XML"
                                    dur="6s"
                                    keyTimes="0;0.5;1"
                                    repeatCount="indefinite"
                                    type="translate"
                                    values="0;5;0"
                                    calcMode="linear">
                                </animateTransform>
                            </g>
                            <g id="Gray_cloud_4">
                                <path id="XMLID_65_" className="gray" d="M54.7,22.3H33.4c-3.3,0-6-2.7-6-6v0c0-3.3,2.7-6,6-6h21.3c3.3,0,6,2.7,6,6v0 C60.7,19.6,58,22.3,54.7,22.3z" />
                                <circle id="XMLID_64_" className="gray" cx="45.7" cy="10.7" r="10.7" />
                                <animateTransform attributeName="transform"
                                    attributeType="XML"
                                    dur="6s"
                                    keyTimes="0;0.5;1"
                                    repeatCount="indefinite"
                                    type="translate"
                                    values="0;-3;0"
                                    calcMode="linear">
                                </animateTransform>
                            </g>
                            <g id="Lightning_4">
                                <path id="XMLID_79_" className="yellow" d="M43.6,22.7c-0.2,0.6-0.4,1.3-0.6,1.9c-0.2,0.6-0.4,1.2-0.7,1.8c-0.4,1.2-0.9,2.4-1.5,3.5
          c-1,2.3-2.2,4.6-3.4,6.8l-1.7-2.9c3.2-0.1,6.3-0.1,9.5,0l3,0.1l-1.3,2.5c-1.1,2.1-2.2,4.2-3.5,6.2c-0.6,1-1.3,2-2,3
          c-0.7,1-1.4,2-2.2,2.9c0.2-1.2,0.5-2.4,0.8-3.5c0.3-1.2,0.6-2.3,1-3.4c0.7-2.3,1.5-4.5,2.4-6.7l1.7,2.7c-3.2,0.1-6.3,0.2-9.5,0
          l-3.4-0.1l1.8-2.8c1.4-2.1,2.8-4.2,4.3-6.2c0.8-1,1.6-2,2.4-3c0.4-0.5,0.8-1,1.3-1.5C42.7,23.7,43.1,23.2,43.6,22.7z"/>
                                <animate attributeType="CSS"
                                    attributeName="opacity"
                                    attributeType="XML"
                                    dur="1.5s"
                                    keyTimes="0;0.5;1"
                                    repeatCount="indefinite"
                                    values="1;0;1"
                                    calcMode="linear" />
                            </g>
                        </g>
                    </svg>
                </div></div>)
    }

    const snowy = () => {
        return (
            <div className="elements"><div className="element">
                <svg version="1.1" id="Layer_1" xmlnsXlink="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 55.1 52.5" style={{ enableBackground: "new 0 0 55.1 52.5" }} xmlSpace="preserve">
                    <g id="Cloud_7">
                        <g id="White_cloud_7">
                            <path id="XMLID_8_" className="white" d="M47.2,34.5H7.9c-4.3,0-7.9-3.5-7.9-7.9l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9 v0C55.1,30.9,51.6,34.5,47.2,34.5z" />
                            <circle id="XMLID_5_" className="white" cx="17.4" cy="17.3" r="9.3" />
                            <circle id="XMLID_1_" className="white" cx="34.5" cy="15.6" r="15.6" />
                        </g>
                        <circle class="white" cx="37" cy="43.5" r="3">
                            <animateTransform attributeName="transform"
                                attributeType="XML"
                                dur="1.5s"
                                keyTimes="0;0.33;0.66;1"
                                repeatCount="indefinite"
                                type="translate"
                                values="1 -2;3 2; 1 4; 2 6"
                                calcMode="linear">
                            </animateTransform>
                        </circle>
                        <circle class="white" cx="27" cy="43.5" r="3">
                            <animateTransform attributeName="transform"
                                attributeType="XML"
                                dur="1.5s"
                                keyTimes="0;0.33;0.66;1"
                                repeatCount="indefinite"
                                type="translate"
                                values="1 -2;3 2; 1 4; 2 6"
                                calcMode="linear">
                            </animateTransform>
                        </circle>
                        <circle class="white" cx="17" cy="43.5" r="3">
                            <animateTransform attributeName="transform"
                                attributeType="XML"
                                dur="1.5s"
                                keyTimes="0;0.33;0.66;1"
                                repeatCount="indefinite"
                                type="translate"
                                values="1 -2;3 2; 1 4; 2 6"
                                calcMode="linear">
                            </animateTransform>
                        </circle>
                    </g>
                </svg>
            </div></div>)
    }
    const nightClear = () => {
        <div className="element">
            <svg version="1.1" id="Layer_1" xmlnsXlink="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30.8 42.5" style={{ enableBackground: "new 0 0 30.8 42.5" }} xmlSpace="preserve" height="40px" width="40px">
                <path id="Moon" className="yellow" d="M15.3,21.4C15,12.1,21.1,4.2,29.7,1.7c-2.8-1.2-5.8-1.8-9.1-1.7C8.9,0.4-0.3,10.1,0,21.9 c0.3,11.7,10.1,20.9,21.9,20.6c3.2-0.1,6.3-0.9,8.9-2.3C22.2,38.3,15.6,30.7,15.3,21.4z" />
            </svg>
        </div>
    }
    const night = () => {
        <div className="element">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60.7 44.4" style={{ enableBackground: "new 0 0 60.7 44.4" }} xmlSpace="preserve">
                <g id="Cloud_5">
                    <g id="White_cloud_5">
                        <path id="XMLID_49_" className="white" d="M47.2,44.4H7.9c-4.3,0-7.9-3.5-7.9-7.9l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9 v0C55.1,40.9,51.6,44.4,47.2,44.4z" />
                        <circle id="XMLID_48_" className="white" cx="17.4" cy="27.2" r="9.3" />
                        <circle id="XMLID_47_" className="white" cx="34.5" cy="25.5" r="15.6" />
                        <animateTransform attributeName="transform"
                            attributeType="XML"
                            dur="6s"
                            keyTimes="0;0.5;1"
                            repeatCount="indefinite"
                            type="translate"
                            values="0;5;0"
                            calcMode="linear">
                        </animateTransform>
                    </g>
                    <path id="Moon_5" className="yellow" d="M33.6,17.9c-0.2-7.7,4.9-14.4,12-16.4c-2.3-1-4.9-1.5-7.6-1.5c-9.8,0.3-17.5,8.5-17.2,18.3 c0.3,9.8,8.5,17.5,18.3,17.2c2.7-0.1,5.2-0.8,7.5-1.9C39.3,32,33.8,25.6,33.6,17.9z" />
                    <g id="Gray_cloud_5">
                        <path id="XMLID_45_" className="gray" d="M54.7,26.8H33.4c-3.3,0-6-2.7-6-6v0c0-3.3,2.7-6,6-6h21.3c3.3,0,6,2.7,6,6v0 C60.7,24.1,58,26.8,54.7,26.8z" />
                        <circle id="XMLID_43_" className="gray" cx="45.7" cy="15.1" r="10.7" />
                        <animateTransform attributeName="transform"
                            attributeType="XML"
                            dur="6s"
                            keyTimes="0;0.5;1"
                            repeatCount="indefinite"
                            type="translate"
                            values="0;-3;0"
                            calcMode="linear">
                        </animateTransform>
                    </g>
                </g>
            </svg>
        </div>
    }


    const firstDayIcon = () => {

        if (weather.data.list[0].weather[0].main === "Rain") {
            return rain()
        }
        else if (weather.data.list[0].weather[0].main === "Clear") {

            return sunny()
        }
        else if (weather.data.list[0].weather[0].main === "Clouds") {
            if (weather.data.list[0].weather[0].description === "few clouds") {
                return cloudyWithSun()
            }
            else if (weather.data.list[0].weather[0].description === "scattered clouds") {
                return cloudy()
            }
            else {
                return cloudy()
            }

        }
        else if (weather.data.list[0].weather[0].main === "Thunderstorm") {
            return cloudyWithThunderm()
        }
        else if (weather.data.list[0].weather[0].main === "Snow") {
            return snowy()
        }
        else {
            return cloudy()
        }




    }
    const secondDayIcon = () => {
        if (weather.data.list[1].weather[0].main === "Rain") {
            return rain()
        }
        else if (weather.data.list[1].weather[0].main === "Clear") {
            return sunny()
        }
        else if (weather.data.list[1].weather[0].main === "Clouds") {
            if (weather.data.list[1].weather[0].description === "few clouds") {
                return cloudyWithSun()
            }
            else if (weather.data.list[1].weather[0].description === "scattered clouds") {
                return cloudy()
            }
            else {
                return cloudy()
            }

        }
        else if (weather.data.list[1].weather[0].main === "Thunderstorm") {
            return cloudyWithThunderm()
        }
        else if (weather.data.list[1].weather[0].main === "Snow") {
            return snowy()
        }
        else {
            return cloudy()
        }

    }
    const thirdDayIcon = () => {
        if (weather.data.list[2].weather[0].main === "Rain") {
            return rain()
        }
        else if (weather.data.list[2].weather[0].main === "Clear") {
            return sunny()
        }
        else if (weather.data.list[2].weather[0].main === "Clouds") {
            if (weather.data.list[2].weather[0].description === "few clouds") {
                return cloudyWithSun()
            }
            else if (weather.data.list[2].weather[0].description === "scattered clouds") {
                return cloudy()
            }
            else {
                return cloudy()
            }

        }
        else if (weather.data.list[2].weather[0].main === "Thunderstorm") {
            return cloudyWithThunderm()
        }
        else if (weather.data.list[2].weather[0].main === "Snow") {
            return snowy()
        }
        else {
            return cloudy()
        }

    }
    const forthDayIcon = () => {
        if (weather.data.list[3].weather[0].main === "Rain") {
            return rain()
        }
        else if (weather.data.list[3].weather[0].main === "Clear") {
            return sunny()
        }
        else if (weather.data.list[3].weather[0].main === "Clouds") {
            if (weather.data.list[3].weather[0].description === "few clouds") {
                return cloudyWithSun()
            }
            else if (weather.data.list[3].weather[0].description === "scattered clouds") {
                return cloudy()
            }
            else {
                return cloudy()
            }

        }
        else if (weather.data.list[3].weather[0].main === "Thunderstorm") {
            return cloudyWithThunderm()
        }
        else if (weather.data.list[3].weather[0].main === "Snow") {
            return snowy()
        }
        else {
            return cloudy()
        }

    }
    const fifthDayIcon = () => {
        if (weather.data.list[4].weather[0].main === "Rain") {
            return rain()
        }
        else if (weather.data.list[4].weather[0].main === "Clear") {
            return sunny()
        }
        else if (weather.data.list[4].weather[0].main === "Clouds") {
            if (weather.data.list[4].weather[0].description === "few clouds") {
                return cloudyWithSun()
            }
            else if (weather.data.list[4].weather[0].description === "scattered clouds") {
                return cloudy()
            }
            else {
                return cloudy()
            }

        }
        else if (weather.data.list[4].weather[0].main === "Thunderstorm") {
            return cloudyWithThunderm()
        }
        else if (weather.data.list[4].weather[0].main === "Snow") {
            return snowy()
        }
        else {
            return cloudy()
        }

    }
    const sixthDayIcon = () => {
        if (weather.data.list[5].weather[0].main === "Rain") {
            return rain()
        }
        else if (weather.data.list[5].weather[0].main === "Clear") {
            return sunny()
        }
        else if (weather.data.list[5].weather[0].main === "Clouds") {
            if (weather.data.list[5].weather[0].description === "few clouds") {
                return cloudyWithSun()
            }
            else if (weather.data.list[5].weather[0].description === "scattered clouds") {
                return cloudy()
            }
            else {
                return cloudy()
            }

        }
        else if (weather.data.list[5].weather[0].main === "Thunderstorm") {
            return cloudyWithThunderm()
        }
        else if (weather.data.list[5].weather[0].main === "Snow") {
            return snowy()
        }
        else {
            return cloudy()
        }

    }
    const seventhDayIcon = () => {
        if (weather.data.list[6].weather[0].main === "Rain") {
            return rain()
        }
        else if (weather.data.list[6].weather[0].main === "Clear") {
            return sunny()
        }
        else if (weather.data.list[6].weather[0].main === "Clouds") {
            if (weather.data.list[6].weather[0].description === "few clouds") {
                return cloudyWithSun()
            }
            else if (weather.data.list[6].weather[0].description === "scattered clouds") {
                return cloudy()
            }
            else {
                return cloudy()
            }

        }
        else if (weather.data.list[6].weather[0].main === "Thunderstorm") {
            return cloudyWithThunderm()
        }
        else if (weather.data.list[6].weather[0].main === "Snow") {
            return snowy()
        }
        else {
            return cloudy()
        }

    }



    return (
        <div>
            <h1>{weather ? weather.data.city.name : "loading"}</h1>
            <div class="container ">
                <div className="row">
                    <div className="column ">
                        <div className="card today ">
                            <h5>
                                {getDayName()}
                            </h5>
                            <div >
                                {weather ? firstDayIcon() : "loading"}
                            </div>
                            <div className="temperature" >
                                <div className="header_main">
                                    <span className="header">Max</span>
                                    <span className="max_temp">
                                        {weather ? `${Math.trunc(weather.data.list[0].main.temp_max)}°C` : "loading"}
                                    </span>
                                </div>
                                <div className="header_main">
                                    <span className="header">Min</span>
                                    <span className="min_temp">
                                        {weather ? `${Math.trunc(weather.data.list[0].main.temp_min)}°C` : "loading"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="column">
                        <div className="card" >
                            <h5>
                                {days[(today.getDay() + 1) > 6 ? (today.getDay() + 1) % 7 : (today.getDay() + 1)]}

                            </h5>
                            <div>
                                {weather ?
                                    secondDayIcon()
                                    : "Loading"}
                            </div>
                            <div className="temperature" >
                                <div className="header_main">
                                    <span className="header">Max</span>
                                    <span className="max_temp">
                                        {weather ? `${Math.trunc(weather.data.list[1].main.temp_max)}°C` : "loading"}
                                    </span></div>
                                <div className="header_main">
                                    <span className="header">Min</span>
                                    <span className="min_temp">

                                        {weather ? `${Math.trunc(weather.data.list[1].main.temp_min)}°C` : "loading"}
                                    </span>
                                </div>
                            </div>
                        </div></div>
                    <div className="column">
                        <div className="card " >
                            <h5>
                                {days[(today.getDay() + 2) > 6 ? (today.getDay() + 2) % 7 : (today.getDay() + 2)]}
                            </h5>
                            <div>
                                {weather ?
                                    thirdDayIcon()
                                    : "Loading"}
                            </div>
                            <div className="temperature" >
                                <div className="header_main">
                                    <span className="header">Max</span>
                                    <span className="max_temp">
                                    {weather ? `${Math.trunc(weather.data.list[2].main.temp_max)}°C` : "loading"}
                                </span></div>
                                <div className="header_main">
                                    <span className="header">Min</span>
                                    <span className="min_temp">
                                    {weather ? `${Math.trunc(weather.data.list[2].main.temp_min)}°C` : "loading"}
                                </span></div>
                            </div>
                        </div></div>
                    <div className="column">
                        <div className="card " >
                            <h5>
                                {days[(today.getDay() + 3) > 6 ? (today.getDay() + 3) % 7 : (today.getDay() + 3)]}
                            </h5>
                            <div>
                                {weather ?
                                    forthDayIcon()
                                    : "Loading"}
                            </div>
                            <div className="temperature" >
                                <div className="header_main">
                                    <span className="header">Max</span>
                                    <span className="max_temp">
                                    {weather ? `${Math.trunc(weather.data.list[3].main.temp_max)}°C` : "loading"}
                                </span></div>
                                <div className="header_main">
                                    <span className="header">Min</span>
                                    <span className="min_temp">
                                    {weather ? `${Math.trunc(weather.data.list[3].main.temp_min)}°C` : "loading"}
                                </span></div>
                            </div>
                        </div></div>
                    <div className="column">
                        <div className="card " >
                            <h5>
                                {days[(today.getDay() + 4) > 6 ? (today.getDay() + 4) % 7 : (today.getDay() + 4)]}
                            </h5>
                            <div>
                                {weather ?
                                    fifthDayIcon()
                                    : "Loading"}
                            </div>
                            <div className="temperature" >
                                <div className="header_main">
                                    <span className="header">Max</span>
                                    <span className="max_temp">
                                    {weather ? `${Math.trunc(weather.data.list[4].main.temp_max)}°C` : "loading"}
                                </span></div>
                                <div className="header_main">
                                    <span className="header">Min</span>
                                    <span className="min_temp">
                                    {weather ? `${Math.trunc(weather.data.list[4].main.temp_min)}°C` : "loading"}
                                </span></div>
                            </div>
                        </div></div>
                    <div className="column">
                        <div className="card " >
                            <h5>
                                {days[(today.getDay() + 5) > 6 ? (today.getDay() + 5) % 7 : (today.getDay() + 5)]}
                            </h5>
                            <div>
                                {weather ?
                                    sixthDayIcon()
                                    : "Loading"}
                            </div>
                            <div className="temperature" >
                                <div className="header_main">
                                    <span className="header">Max</span>
                                    <span className="max_temp">
                                    {weather ? `${Math.trunc(weather.data.list[5].main.temp_max)}°C` : "loading"}
                                </span></div>
                                <div className="header_main">
                                    <span className="header">Min</span>
                                    <span className="min_temp">
                                    {weather ? `${Math.trunc(weather.data.list[5].main.temp_min)}°C` : "loading"}
                                </span></div>
                            </div>
                        </div></div>
                    <div className="column">
                        <div className="card " >
                            <h5>
                                {days[(today.getDay() + 6) > 6 ? (today.getDay() + 6) % 7 : (today.getDay() + 6)]}
                            </h5>
                            <div>
                                {weather ?
                                    seventhDayIcon()
                                    : "Loading"}
                            </div>
                            <div className="temperature" >
                                <div className="header_main">
                                    <span className="header">Max</span>
                                    <span className="max_temp">
                                    {weather ? `${Math.trunc(weather.data.list[6].main.temp_max)}°C` : "loading"}
                                </span></div>
                                <div className="header_main">
                                    <span className="header">Min</span>
                                    <span className="min_temp">
                                    {weather ? `${Math.trunc(weather.data.list[6].main.temp_min)}°C` : "loading"}
                                </span></div>
                            </div>
                        </div>
                    </div>
                </div></div>
        </div>
    )
}

export default Card
