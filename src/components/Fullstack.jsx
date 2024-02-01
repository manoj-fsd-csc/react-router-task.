import React from 'react'

function Fullstack({ data2 }) {
    return <>

        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {data2.map((e, i) => (
                    <div className="col" key={i}>
                        <div className="card">
                            <img src={e.image} alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{e.title}</h5>
                                <p>{e.paragraph}</p>
                                <p className="card-text">{e.readmore}</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-body-secondary">{e.footer}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    </>
}

export default Fullstack