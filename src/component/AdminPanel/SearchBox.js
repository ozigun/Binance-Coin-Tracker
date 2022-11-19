import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

function SearchBox(props) {
  return (
    <div>
      <div className="NavBarHeader justify-content-between ">
        <div class="container mt-3">
          <div class="row align-items-center">
            <div class="col-lg-6 col-sm-12 mx-auto">
              <div class="alert alert-warning" role="alert">
                <div class="input-group w-100 ">
                  <input
                    type="text"
                    class="form-control border border-warning "
                    placeholder="Aradığınız Coini Buraya Yazınız"
                    onChange={props.searchChange}
                  />
                  <div class="input-group-append"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SearchBox;
