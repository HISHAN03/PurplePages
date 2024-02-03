export default function Hero2()
{

    const borderedTextStyle = {
        border: '2px solid #8B5CF6', // You can adjust the color as needed
        display: 'inline-block', // This ensures the border wraps around the text
        padding: '10px', // Add padding to give some space between text and border
      };

      return (
        <div className="hero mt-5 bg-white">
          <div className="hero-content text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 font-mono text-4xl font-bold mt-5">Customer Benefits :)</h1>
              <div className="w-full mt-5" style={borderedTextStyle}>
                <ul className="list-disc pl-5">
                  <li className="font-mono text-xl font-bold">PERSONALIZED, UNIQUE ARTWORKS</li>
                  <li className="font-mono text-xl font-bold">SPACE TRANSFORMATION WITH STYLE</li>
                  <li className="font-mono text-xl font-bold">CRAFTSMANSHIP AND DETAIL EXCELLENCE</li>
                  <li className="font-mono text-xl font-bold">DIVERSE ART OPTIONS AVAILABLE</li>
                  <li className="font-mono text-xl font-bold">INSPIRING CREATIVITY, MEMORABLE GIFTS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
}