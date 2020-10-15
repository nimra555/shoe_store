import React from 'react';

function About() {
    return (
        <div className="flex-container">
           <div style={{justifyItems:"center",padding:10,width:'40%'}}>
            <h1 className="heade">About</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and scrambled it to make a type specimen book.
               It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
           </p>
               
            </div> 
            <div>
                <img src="https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1" height={300} alt="shoe"/>
            </div>
        </div>
    )
}

export default About;