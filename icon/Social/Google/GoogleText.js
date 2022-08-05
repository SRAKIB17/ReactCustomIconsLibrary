import React from 'react';

const GoogleText = ({ color = 'currentColor', size = '1em', ...rest }) => {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill={color}
            {...rest}

            viewBox="0 -172 512 512" version="1.1" >
            <g>
                <path d="M496.052455,102.672055 L510.255737,112.140909 C505.6459,118.931075 494.619668,130.580258 475.557368,130.580258 C451.885231,130.580258 434.255719,112.2655 434.255719,88.967133 C434.255719,64.1736841 452.072116,47.3540078 473.563925,47.3540078 C495.180323,47.3540078 505.77049,64.5474546 509.19672,73.8294242 L511.065574,78.5638516 L455.373756,101.613038 C459.609823,109.960581 466.213103,114.196648 475.557368,114.196648 C484.901633,114.196648 491.380323,109.586811 496.052455,102.672055 L496.052455,102.672055 Z M452.383592,87.6589359 L489.573765,72.2097517 C487.518026,67.0392586 481.413107,63.3638478 474.124581,63.3638478 C464.842612,63.3638478 451.947526,71.5868007 452.383592,87.6589359 L452.383592,87.6589359 Z" fill="#FF302F"></path>
                <path d="M407.406531,4.93104632 L425.347519,4.93104632 L425.347519,126.780257 L407.406531,126.780257 L407.406531,4.93104632 L407.406531,4.93104632 Z" fill="#20B15A"></path>
                <path d="M379.124557,50.5933528 L396.442594,50.5933528 L396.442594,124.599929 C396.442594,155.311412 378.314721,167.957316 356.885207,167.957316 C336.701596,167.957316 324.554051,154.376986 320.00651,143.350753 L335.891759,136.747473 C338.757334,143.537639 345.67209,151.573706 356.885207,151.573706 C370.652424,151.573706 379.124557,143.039278 379.124557,127.091732 L379.124557,121.111404 L378.501606,121.111404 C374.39013,126.095011 366.540947,130.580258 356.573731,130.580258 C335.767169,130.580258 316.704869,112.452385 316.704869,89.0917231 C316.704869,65.6064713 335.767169,47.2917126 356.573731,47.2917126 C366.478652,47.2917126 374.39013,51.7146646 378.501606,56.5736822 L379.124557,56.5736822 L379.124557,50.5933528 L379.124557,50.5933528 Z M380.370459,89.0917231 C380.370459,74.3900801 370.590128,63.6753233 358.131109,63.6753233 C345.547499,63.6753233 334.957333,74.3900801 334.957333,89.0917231 C334.957333,103.606481 345.547499,114.134352 358.131109,114.134352 C370.590128,114.196648 380.370459,103.606481 380.370459,89.0917231 L380.370459,89.0917231 Z" fill="#3686F7"></path>
                <path d="M218.21632,88.7802476 C218.21632,112.763861 199.527791,130.393373 176.603195,130.393373 C153.678599,130.393373 134.990069,112.701565 134.990069,88.7802476 C134.990069,64.6720448 153.678599,47.1048274 176.603195,47.1048274 C199.527791,47.1048274 218.21632,64.6720448 218.21632,88.7802476 L218.21632,88.7802476 Z M200.026151,88.7802476 C200.026151,73.8294242 189.186804,63.5507331 176.603195,63.5507331 C164.019585,63.5507331 153.180238,73.8294242 153.180238,88.7802476 C153.180238,103.606481 164.019585,114.009763 176.603195,114.009763 C189.186804,114.009763 200.026151,103.606481 200.026151,88.7802476 L200.026151,88.7802476 Z" fill="#FF302F"></path>
                <path d="M309.104867,88.967133 C309.104867,112.950746 290.416338,130.580258 267.491742,130.580258 C244.567146,130.580258 225.878617,112.950746 225.878617,88.967133 C225.878617,64.8589302 244.567146,47.3540078 267.491742,47.3540078 C290.416338,47.3540078 309.104867,64.796635 309.104867,88.967133 L309.104867,88.967133 Z M290.852404,88.967133 C290.852404,74.0163095 280.013057,63.7376184 267.429447,63.7376184 C254.845837,63.7376184 244.00649,74.0163095 244.00649,88.967133 C244.00649,103.793366 254.845837,114.196648 267.429447,114.196648 C280.075352,114.196648 290.852404,103.731071 290.852404,88.967133 L290.852404,88.967133 Z" fill="#FFBA40"></path>
                <path d="M66.5900525,112.327794 C40.4884066,112.327794 20.0556146,91.2720515 20.0556146,65.1704056 C20.0556146,39.0687598 40.4884066,18.0130168 66.5900525,18.0130168 C80.6687446,18.0130168 90.9474357,23.5572805 98.5474373,30.6589216 L111.068752,18.137607 C100.478585,7.98350613 86.3375984,0.258913997 66.5900525,0.258913997 C30.8326666,0.258913997 0.744134408,29.4130196 0.744134408,65.1704056 C0.744134408,100.927792 30.8326666,130.081897 66.5900525,130.081897 C85.9015328,130.081897 100.478585,123.727797 111.878588,111.891729 C123.590067,100.180251 127.203183,83.7343447 127.203183,70.4031939 C127.203183,66.2294223 126.704822,61.9310606 126.144166,58.7540106 L66.5900525,58.7540106 L66.5900525,76.0720477 L109.013014,76.0720477 C107.767112,86.9113947 104.340882,94.3245113 99.2949785,99.3704142 C93.1900592,105.537629 83.534319,112.327794 66.5900525,112.327794 L66.5900525,112.327794 L66.5900525,112.327794 Z" fill="#3686F7"></path>
            </g>
        </svg>

    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git
export default GoogleText;