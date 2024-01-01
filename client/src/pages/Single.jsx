import { Link } from "react-router-dom";
// import Menu from "../components/Menu";

export default function Single() {
  return (
    <div className="single">
      {/* content */}
      <div className="content">
        <img src="#" alt="" />
        <div className="user">
          <img src="#user" alt="" />
          <div className="info">
            <span>Mohamed Afssas</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="actions">
            <Link to={`/write?edit=2`}>
              <img
                src="/img/edit.png"
                alt="edit post"
                title="edit"
                className="edit"
              />
            </Link>
            <img
              src="/img/delete.png"
              alt="delete post"
              title="delete"
              className="delete"
            />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
        <p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            similique nemo autem odit reiciendis eveniet, porro quis explicabo
            alias dolor. Consequatur unde laboriosam commodi, facere architecto
            illo totam porro. Architecto.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            similique nemo autem odit reiciendis eveniet, porro quis explicabo
            alias dolor. Consequatur unde laboriosam commodi, facere architecto
            illo totam porro. Architecto.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            similique nemo autem odit reiciendis eveniet, porro quis explicabo
            alias dolor. Consequatur unde laboriosam commodi, facere architecto
            illo totam porro. Architecto.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            similique nemo autem odit reiciendis eveniet, porro quis explicabo
            alias dolor. Consequatur unde laboriosam commodi, facere architecto
            illo totam porro. Architecto.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            similique nemo autem odit reiciendis eveniet, porro quis explicabo
            alias dolor. Consequatur unde laboriosam commodi, facere architecto
            illo totam porro. Architecto. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Aliquam cumque nulla perferendis fugit
            perspiciatis assumenda, incidunt veniam odio distinctio nobis
            eligendi optio expedita labore commodi a ullam amet soluta ipsam.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id dolorem
            distinctio, exercitationem laudantium impedit quae voluptate, sit
            iste dolorum eius saepe. Minus eius natus ut nulla esse porro
            doloremque magni!
          </p>
        </p>
      </div>

      {/* Menu */}
      {/* <Menu /> */}
    </div>
  );
}
