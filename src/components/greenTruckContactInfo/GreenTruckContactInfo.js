import React from 'react';
import woodenTruck from '../../media/wooden_truck.png';
import '../greenTruckContactInfo/GreenTruckContactInfo.scss'

function GreenTruckContactInfo() {

    return (
        <footer className="wooden_footer">
            <div className="wooden_footer_left_info">
                <h3> Бажаєте працювати та отримати інформацію? </h3>
                <p> Фахівці PalettenWerk Ukraine відповідають на всі питання, що вас цікавлять. Зателефонуйте нам за
                    телефоном або напишіть нам на email. </p>
                <div className="number_and_email_info">
                    <div>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.4 20.5C11.3173 20.4947 7.40331 18.8705 4.5164 15.9836C1.62949 13.0967 0.00529192 9.1827 0 5.09999C0 3.88 0.484642 2.70997 1.34731 1.8473C2.20998 0.984634 3.38 0.499992 4.6 0.499992C4.85834 0.498024 5.11625 0.521471 5.37 0.569992C5.61531 0.606293 5.85647 0.666582 6.09 0.749992C6.25425 0.807622 6.40061 0.907126 6.51461 1.03866C6.62861 1.1702 6.7063 1.32922 6.74 1.49999L8.11 7.49999C8.14693 7.66286 8.14248 7.83237 8.09706 7.99308C8.05165 8.15378 7.96671 8.30055 7.85 8.41999C7.72 8.55999 7.71 8.56999 6.48 9.20999C7.46499 11.3708 9.1932 13.1062 11.35 14.1C12 12.86 12.01 12.85 12.15 12.72C12.2694 12.6033 12.4162 12.5183 12.5769 12.4729C12.7376 12.4275 12.9071 12.4231 13.07 12.46L19.07 13.83C19.2353 13.8683 19.3881 13.9481 19.5141 14.0618C19.64 14.1756 19.735 14.3195 19.79 14.48C19.8744 14.7174 19.938 14.9616 19.98 15.21C20.0202 15.4613 20.0403 15.7155 20.04 15.97C20.0216 17.1848 19.5233 18.3429 18.654 19.1916C17.7847 20.0404 16.6149 20.5107 15.4 20.5Z"
                                fill="white"/>
                        </svg>
                        <p> +48 604 592 700 </p>
                    </div>
                    <div>
                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17 0.5H3C2.20435 0.5 1.44129 0.816071 0.87868 1.37868C0.316071 1.94129 0 2.70435 0 3.5V13.5C0 14.2956 0.316071 15.0587 0.87868 15.6213C1.44129 16.1839 2.20435 16.5 3 16.5H17C17.7956 16.5 18.5587 16.1839 19.1213 15.6213C19.6839 15.0587 20 14.2956 20 13.5V3.5C20 2.70435 19.6839 1.94129 19.1213 1.37868C18.5587 0.816071 17.7956 0.5 17 0.5V0.5ZM17 2.5L10.5 6.97C10.348 7.05777 10.1755 7.10397 10 7.10397C9.82446 7.10397 9.65202 7.05777 9.5 6.97L3 2.5H17Z"
                                fill="white"/>
                        </svg>
                        <p> email@email.com </p>
                    </div>
                </div>
            </div>
            <div className="truck_image">
                <img src={woodenTruck} alt=""/>
            </div>

        </footer>
    );
}

export default GreenTruckContactInfo;