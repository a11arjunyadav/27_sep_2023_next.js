import React from 'react'

export default function LeftAside() {
  return (
        <aside className="col-3 a_tbdr">
            <ul className="nav flex-column mt-5">
                <li className="nav-item">
                  <a className="nav-link active a_b" aria-current="page" href="#">The Flight</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link a_b mt-3" href="#">The City</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link a_b mt-3" href="#">The Island</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link a_b mt-3" aria-disabled="true">The Food</a>
                </li>
            </ul>
        </aside>
  )
}
