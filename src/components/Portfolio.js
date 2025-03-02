// import React, { Component } from 'react';

// export default class Portfolio extends Component {
//   render() {
//     let resumeData = this.props.resumeData;
//     return (
//       <section id="portfolio">
//         <div className="row">
//           <div className="twelve columns collapsed">
//             <h1>Check Out Some of My Works.</h1>
//             <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
//               {
//                 resumeData.portfolio && resumeData.portfolio.map((item) => {
//                   return (
//                     <div className="columns portfolio-item" key={item.name}>
//                       <div className="item-wrap">
//                         <a href="#modal-01">
//                           <img src={`${item.imgurl}`} className="item-img" alt={item.name}/> {/* Added alt attribute */}
//                           <div className="overlay">
//                             <div className="portfolio-item-meta">
//                               <h5>{item.name}</h5>
//                               <p>{item.description}</p>
//                             </div>
//                           </div>
//                         </a>
//                       </div>
//                     </div>
//                   )
//                 })
//               }
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }



import React, { Component } from 'react';
import Modal from './Modal'; // Create a separate Modal component

export default class Portfolio extends Component {
  state = {
    selectedProject: null,
    modalOpen: false,
  };

  openModal = (project) => {
    this.setState({
      selectedProject: project,
      modalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      selectedProject: null,
      modalOpen: false,
    });
  };

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => (
                  <div className="columns portfolio-item" key={item.name}>
                    <div className="item-wrap">
                      {/* Instead of static href, use onClick handler */}
                      <a
                        onClick={() => this.openModal(item)}
                        href="#!"
                      >
                        <img
                          src={item.imgurl}
                          className="item-img"
                          alt={item.name}
                        />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {this.state.modalOpen && (
          <Modal
            project={this.state.selectedProject}
            closeModal={this.closeModal}
          />
        )}
      </section>
    );
  }
}
