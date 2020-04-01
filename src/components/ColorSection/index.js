import { Waypoint } from "react-waypoint";

const ColorSection = (props) => {
  return (
    <Waypoint
      topOffset={"5%"}
      bottomOffset={"100%"}
      onEnter={() => {
        props.setHeaderDark(props.dark);
      }}
      onLeave={() => {
        props.setHeaderDark(!props.dark);
      }}
    >
      <section 
        className={`${props.dark?'gradient-bg':'light-bg'} ${props.fullscreen?'fullscreen-div':''}`}>
          {props.children}
      </section>
    </Waypoint>
  );
};

ColorSection.defaultProps = {
  dark: false,
  fullscreen: false
}
export default ColorSection;
