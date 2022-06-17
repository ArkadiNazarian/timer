import {View} from "./view";
import {Timer} from "./container"
export function App() {
   let props= Timer();
  return <View {...props}/>
}