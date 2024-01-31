import React from 'react';

const Testimonials = () => {
  return (
    <main className="n-section n-grey">
      <div className="n-container nooverflow hide w-container">
        <div className="w-layout-grid contentgrid fixedheight-xl sidepadding-s innerpadding-l">
          <div id="w-node-_15947f02-c2cd-e1d3-d934-7aa649d224b6-a00cfc93" className="n-contentwrapper innerpadding aligncenter">
            <div className="n-fader"></div>
            <div className="n-paragraphwrapper aligncenter bottommargin-l">
              <h2 className="n-heading03 centered">What people have to say</h2>
            </div>
            <div className="w-layout-grid n-testigrid">
              {[...Array(8)].map((_, index) => (
                <div className="n-testicard mobilehide" key={index}>
                  <div className="n-testiuserwrapper">
                    <img
                      src="https://assets-global.website-files.com/6286650c317fddfbb431b9c1/62f214bb0e99ef4fc420bb2f_ProfilePlaceholder.png"
                      loading="lazy" width="40" alt="" className="n-testiimage"
                    />
                    <div className="n-testilabelwrapper">
                      <div className="n-label01">Name surname</div>
                      <div className="n-label02">@namesurname</div>
                    </div>
                  </div>
                  <p className="n-paragraph03 bottompadding-l">“ It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout... ”</p>
                  <div className="n-label03">12:34 PM • Nov 17, 2022</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
