import "./HeroTech.css";
import tracking from "../assets/head-tracking.png";
import motion from "../assets/motion-tracking.png";
import display from "../assets/display.jpg";
import spatial from "../assets/spatial.jpg";
import sensor from "../assets/sensor.jpg";
import ergonomic from "../assets/ergonomic.png";

const Tech = [
  {
    header: "Head Tracking",
    description:
      "Head Tracking in Virtual Reality Head tracking is a core technology in Virtual Reality (VR) that allows the system to monitor and respond to the movements of a user's head in real time. It ensures that what the user sees inside the headset changes naturally as they look around — just like in the real world.In simple terms, head tracking gives VR its sense of presence. When you turn, tilt, or nod your head, the VR environment updates instantly, creating the illusion that you are physically inside the virtual space.",
    image: tracking,
  },
  {
    header: "Motion Tracking",
    description:
      "Motion tracking is the core technology that allows a Virtual Reality (VR) system to detect, follow, and respond to the movements of your  body in real time. It ensures that every physical motion — whether you tilt your head, reach out with your hand, or walk across the room — is accurately reflected inside the virtual world. To achieve  this, VR systems use a mix of sensors, cameras, and infrared emitters that capture position and rotation data. Inside the headset and controllers, IMUs (Inertial Measurement Units) — made up of  gyroscopes, accelerometers, and sometimes magnetometers — continuously measure your movement and orientation. Advanced systems also include external cameras or base stations that track your position in 3D space with extreme precision. Together, these components enable six degrees of freedom (6DoF) — meaning you can move forward, backward, up, down, left, right, and rotate in any direction. This freedom makes every interaction in VR feel realistic, from picking up virtual objects to turning your head toward a sound. Motion tracking is what bridges the gap between your real-world movements and your digital presence, creating a seamless sense of immersion and physical connection with the virtual environment.",
    image: motion,
  },
  {
    header: "Display Technology",
    description:
      "Display technology is one of the key components that makes Virtual  Reality immersive and realistic. VR headsets use stereoscopic  displays to present slightly different images to each eye, allowing  the brain to perceive depth and 3D space naturally. To ensure smooth  visual movement and reduce motion sickness, these displays operate  at high refresh rates—usually 90Hz or more—with very low latency so  that changes in head movement are reflected almost instantly. Modern  VR headsets use advanced OLED or fast-switching LCD panels that provide sharp images, vibrant colors, and minimal motion blur. Features like wide field of view and improved lens systems enhance visual realism, while new techniques such as foveated rendering use  eye tracking to focus high-resolution graphics where the user islooking. Together, these innovations make VR visuals clearer, smoother, and more lifelike, strengthening the sense of presence in the virtual world.",
    image: display,
  },
  {
    header: "Spatial Audio",
    description:
      "Spatial audio is a vital part of Virtual Reality that brings soundto life and enhances the feeling of presence in a virtual environment. Unlike regular stereo sound, spatial audio allows users  to hear sounds as if they are coming from specific directions and  distances within a 3D space. This means that when an object moves  behind, above, or beside you in VR, the sound changes naturally to  match its position. The technology relies on techniques such as  binaural rendering and head-related transfer functions (HRTFs) to  simulate how the human ear perceives sound in the real world. By  tracking head movements and adjusting the audio accordingly, spatial  audio ensures that sounds remain anchored in the virtual scene even  as the user turns or moves. This realistic sound positioning not  only deepens immersion but also helps users navigate and react more intuitively within the virtual world, making experiences more convincing and engaging.",
    image: spatial,
  },
  {
    header: "Hardware and sensors",
    description:
      "Hardware and sensors form the physical foundation of any Virtual Reality system, enabling users to interact naturally with digital environments. A typical VR setup includes a headset, motion controllers, cameras, and tracking sensors that work together to detect body movements and translate them into virtual actions. The  headset houses key components such as displays, lenses, and built-in  sensors that monitor head position and orientation in real time.  External cameras or infrared sensors may also track hand and body  movement, ensuring precise interaction within the 3D space. Motion  controllers are equipped with accelerometers, gyroscopes, and  sometimes magnetometers to capture fine gestures and orientation changes. These sensors provide the data needed for six degrees of freedom (6DoF), allowing users to move forward, backward, up, down, and rotate freely. Together, the hardware and sensors bridge the gap between the real and virtual worlds, creating a seamless, responsive, and immersive VR experience.",
    image: sensor,
  },
  {
    header: "Human Factors and Ergonomics",
    description:
      "Human factors and ergonomics play a crucial role in the design and  effectiveness of Virtual Reality systems, ensuring that users can interact comfortably and safely within virtual environments. Ergonomics focuses on how the VR headset, controllers, and interfaces fit the human body, reducing strain during extended use  Proper weight distribution, adjustable straps, and balanced design  help prevent neck or facial discomfort. Human factors also address  the cognitive and sensory aspects of VR, such as minimizing motion  sickness through low latency, smooth frame rates, and natural  interaction design. Developers consider how users perceive depth,  movement, and sound to create intuitive and realistic experiences.  Additionally, accessibility and inclusivity are part of ergonomic  design, allowing people of different body types and abilities to use  VR comfortably. By prioritizing human-centered design, VR technology   becomes not only more immersive but also safer, more comfortable, and enjoyable for longer sessions.",
    image: ergonomic,
  },
];
function HeroTech() {
  return (
    <>
      <div className="herotech">
        <h1 className="header2">HOW DOES IT WORK?</h1>
        <div>
          {Tech.map((Tech, index) => (
            <div key={index} className="hero-detail">
              <h2>{Tech.header}</h2>
              <p>{Tech.description}</p>
              <img src={Tech.image} alt="" />
            </div>
          ))}
        </div>

        <footer>
          Virtual Reality brings together cutting-edge visuals, motion tracking,
          spatial sound, and smart design to create fully immersive digital
          experiences. These technologies work hand in hand to make the virtual
          world feel real — letting users see, move, and interact naturally. As
          VR continues to advance, it’s shaping the future of entertainment,
          education, and human connection.
        </footer>
      </div>
    </>
  );
}
export default HeroTech;
