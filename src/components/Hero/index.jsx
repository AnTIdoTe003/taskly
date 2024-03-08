import MyButton from "../MyButton";
import "./style.scss";
const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-content">
        <h1>Icrease your Productivity</h1>
        <h3>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit soluta ad non unde dolorum vel aliquam sed repellat
          vitae tempora assumenda corporis, vero eveniet voluptates cupiditate
          facere harum eligendi obcaecati! Molestias ab quam accusantium labore
          ipsa? Optio harum esse est laudantium voluptatum quisquam! Obcaecati
          blanditiis labore nam qui quis enim aut, eos quam atque odio corporis.
          Dignissimos aut accusamus officiis. Deleniti aliquid ratione ipsum
          aspernatur officiis sint amet provident dignissimos, odio incidunt
          quaerat, doloribus animi temporibus rem delectus rerum quis aut nihil
          magni. Blanditiis odio repellat iusto ea, hic nisi.
        </h3>
        <dvi className="hero-btns">
          <button>Explore</button>
          <MyButton myText={"John"} hidden={false} background={"green"} />
        </dvi>
        <p>Try for 30 days without any bill</p>
      </div>
    </div>
  );
};

export default Hero;
