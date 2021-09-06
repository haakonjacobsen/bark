import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export default function StatBar(props:{statNumber:number}) {
  if (props.statNumber < 1 || props.statNumber > 7){
    props.statNumber = 0
  }
  return (
    <Svg viewBox="0 0 148 11" fill="none">
      <Path d="M1.54169 3.90797C2.0529 1.62382 4.08031 0 6.42098 0H21.1429L18.7265 10.7964H6.24275C3.04091 10.7964 0.664153 7.82886 1.36345 4.70432L1.54169 3.90797Z" fill={(props.statNumber >= 1) ? ((props.statNumber > 1)?"#FBD59D":"#FFC876") : "#C4C4C4"}/>
      <Path d="M23.5591 0H42.2857L39.8694 10.7964H21.1428L23.5591 0Z" fill={(props.statNumber >= 2) ? ((props.statNumber > 2)?"#FBD59D":"#FFC876") : "#C4C4C4"}/>
      <Path d="M44.702 0H63.4285L61.0122 10.7964H42.2856L44.702 0Z" fill={(props.statNumber >= 3) ? ((props.statNumber > 3)?"#FBD59D":"#FFC876") : "#C4C4C4"}/>
      <Path d="M65.845 0H84.5716L82.1552 10.7964H63.4287L65.845 0Z" fill={(props.statNumber >= 4) ? ((props.statNumber > 4)?"#FBD59D":"#FFC876") : "#C4C4C4"}/>
      <Path d="M86.9876 0H105.714L103.298 10.7964H84.5713L86.9876 0Z" fill={(props.statNumber >= 5) ? ((props.statNumber > 5)?"#FBD59D":"#FFC876") : "#C4C4C4"}/>
      <Path d="M108.131 0H126.857L124.441 10.7964H105.714L108.131 0Z" fill={(props.statNumber >= 6) ? ((props.statNumber > 6)?"#FBD59D":"#FFC876") : "#C4C4C4"}/>
      <Path d="M146.458 6.88842C145.947 9.17257 143.92 10.7964 141.579 10.7964L126.857 10.7964L129.273 3.23677e-05L141.757 3.36774e-05C144.959 3.40133e-05 147.336 2.96752 146.637 6.09207L146.458 6.88842Z" fill={(props.statNumber >= 7) ? ((props.statNumber > 7)?"#FBD59D":"#FFC876") : "#C4C4C4"}/>
    </Svg>
  )
}
