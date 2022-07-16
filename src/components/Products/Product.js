import React from "react";

export default function Product(props) {
    return (
        <div className="border 1" key={props.index}>
            <h3> {props.product} </h3>
            <div className="row">
                <div className="col-lg-4 col-12">
                    <img
                        src="https://live.staticflickr.com/8035/8074168006_dd24e474ac_b.jpg"
                        alt="Apples"
                        width="350"
                        height="350"
                    />
                    {/*
					Image credit to
					&quot;Apples&quot; by Carriagehouse2011
					is licensed under CC BY 2.0. */}
                    <p>
                        <small>
                            {" "}
                            &quot;Apples&quot; by
                            Carriagehouse2011 is
                            licensed under CC BY
                            2.0.{" "}
                        </small>
                    </p>
                </div>
                <div className="col-lg-8 col-12">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Donec non metus eget
                    lacus gravida dapibus. Pellentesque
                    vitae purus pellentesque, semper odio
                    ut, scelerisque felis. Morbi id aliquet
                    lorem, non lacinia velit. Curabitur
                    gravida quam ac nibh pharetra fermentum
                    et vitae purus. Donec dolor magna,
                    sodales at convallis ac, fermentum eget
                    eros.{" "}
                </div>
            </div>
            <div className="d-flex flex-row-reverse py-1">
                <button className="btn btn-primary">
                    {" "}
                    Add to Cart{" "}
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={() => props.removeFromList()}
                >
                    {" "}
                    Remove from List{" "}
                </button>
            </div>
        </div>
    );
}
