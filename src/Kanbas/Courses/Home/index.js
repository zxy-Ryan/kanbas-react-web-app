import ModuleList from "../Modules/ModuleList";
import "./index.css"


function Home() {
  return (
    <div className="row">
        <div className="col-9">
            <h2>Home</h2>
            <ModuleList />
        </div>
        <div className="col-3">
            <h2>Status</h2>
            <div class="btn-group mb-2" data-toggle="buttons">
              <label class="btn btn-secondary">
                <input
                  type="radio"
                  name="courseStatus"
                  id="unpublish"
                  autocomplete="off"
                  checked
                />
                Unpublish
              </label>
              <label class="btn btn-secondary active">
                <input
                  type="radio"
                  name="courseStatus"
                  id="published"
                  autocomplete="off"
                />
                Published
              </label>
            </div>
            <div style={{ width: '100%' }}>
              <button type="button" class="btn btn-secondary w-100 mb-1 text-start">
                <i class="fas fa-upload"></i> Import Existing Content</button
              ><br />
              <button type="button" class="btn btn-secondary w-100 mb-1 text-start">
                <i class="fas fa-cloud"></i> Import From Commons</button
              ><br />
              <button type="button" class="btn btn-secondary w-100 mb-1 text-start">
                <i class="fas fa-home"></i> Choose Home Page</button
              ><br />
              <button type="button" class="btn btn-secondary w-100 mb-1 text-start">
                <i class="fas fa-stream"></i> View Course Stream</button
              ><br />
              <button type="button" class="btn btn-secondary w-100 mb-1 text-start">
                <i class="fas fa-bullhorn"></i> New Announcement</button
              ><br />
              <button type="button" class="btn btn-secondary w-100 mb-1 text-start">
                <i class="fas fa-chart-line"></i> New Analytics</button
              ><br />
              <button type="button" class="btn btn-secondary w-100 text-start">
                <i class="fas fa-bell"></i> View Course Notifications
              </button>
            </div>

            <h5 class="mt-3">To do</h5>
            <hr/>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
              <li>
                <i class="fas fa-tasks"></i>
                <a href="/">Grade A1</a>
              </li>
            </ul>

            <div class="d-flex justify-content-between align-items-center mt-3">
              <h5>Comming Up</h5>
              <a href="/"
                ><i class="fas fa-chalkboard-teacher text-dark"></i> View
                Calendar</a
              >
            </div>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
              <li>
                <i class="fas fa-chalkboard-teacher me-1"></i>
                <a href="/">Lecture CS4550.12631.202410 Sep 7 at 11:45am</a>
              </li>
              <li>
                <i class="fas fa-chalkboard-teacher me-1"></i>
                <a href="/">Lecture CS4550.12631.202410 Sep 11 at 11:45am</a>
              </li>
              <li>
                <i class="fas fa-chalkboard-teacher me-1"></i>
                <a href="/">CS5610 06 SP23 Lecture 11 at 6pm</a>
              </li>
            </ul>
        </div>
    </div>
  );
}
export default Home;