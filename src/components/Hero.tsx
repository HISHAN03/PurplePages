export default function Hero()
{


    const borderedTextStyle = {
        border: '2px solid #8B5CF6', // You can adjust the color as needed
        display: 'inline-block', // This ensures the border wraps around the text
        padding: '10px', // Add padding to give some space between text and border
      };

    return(
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.pinimg.com/564x/7c/e3/6c/7ce36cec30a7d90d189da49c98f21fcc.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 font-mono text-5xl font-bold" >Welcome To</h1>
            <h1 className="mb-5 font-mono text-5xl font-bold" style={borderedTextStyle}>Purple Pages</h1>
            <p className="mb-5 font-mono text-2xl font-bold " >YOUR GO-TO FOR CANVAS BOARD PAINTINGS, CUSTOM ARTWORKS, AND MORE. ELEVATE YOUR SPACE WITH OUR UNIQUE CREATIONS TAILORED FOR HOMES, OFFICES, AND SCHOOLS. EXPLORE OUR DIVERSE RANGE OF ARTISTRY TODAY</p>
          </div>
        </div>
      </div>


    )
}