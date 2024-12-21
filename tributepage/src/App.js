import React from "react";
import './index.css';

const App = () => {

  return (
    <>
      <div className="outer">
        <div className="heading">
          <h1>SWAMI VIVEKANAND</h1>
        </div>
        <div className="image">
          <div className="imageText">
            <div className="Text1">
              <h2> ABOUT <br />SWAMI VIVEKANAND </h2>
            </div>
            <div className="Text2">
              <h2>ARISE, AWAKE</h2>
              <h2>KEY CONTRIBUTION</h2>
            </div>
          </div>
        </div>

        <div className="history">
          {/* -------------box1--------------- */}
          <div className="box1">
            <h1>ABOUT SWAMI VIVEKANAND</h1>
            <div className="imageSec">

            </div>
            <h2>SWAMI VIVEKANAND</h2>
          </div>

          {/* -------------box2------------- */}
          <div className="box2">
            <h1>About Swami Vivekananda</h1>
            <div className="Paragraph">
           <h2> Swami Vivekananda, born as Narendranath Datta on January 12, 1863, in Kolkata, was a towering spiritual leader and philosopher of India. He is best known for his ground breaking speech at the Parliament of the World's Religions in Chicago in 1893, where he introduced Hinduism to the Western world with the powerful words, "Sisters and brothers of America." Swami Vivekananda was a disciple of the revered saint Ramakrishna Paramahamsa and played a pivotal role in the revival of Hinduism in India and abroad. His teachings emphasized the importance of self-realization, service to humanity, and the oneness of all religions. Vivekananda's life and works continue to inspire millions around the world, embodying the ideals of courage, compassion, and universal brotherhood.</h2>
            </div>
          </div>

          {/* ---------------box3-------------- */}
          <div className="box3">
          <h1>Contribution and Message</h1>
          <div className="Paragraph">
            <h2>Swami Vivekananda's contributions to society were manifold, extending beyond his spiritual teachings. He was instrumental in the establishment of the Ramakrishna Mission in 1897, which focuses on social service, education, and healthcare. Vivekananda emphasized the importance of education as a means of empowering the masses and advocated for the upliftment of the poor and marginalized. His message of universal tolerance, acceptance, and the intrinsic divinity of every individual continues to resonate today. Vivekananda urged society to break free from the shackles of ignorance and superstition and to embrace a life of service, compassion, and self-improvement. His teachings on the unity of all religions and the potential for greatness in every human being inspire us to strive for a better, more inclusive world.</h2>
            <h2><b>Message:</b><span>Arise,Awake,not stop untill the goal is reached.</span></h2>
          </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default App;