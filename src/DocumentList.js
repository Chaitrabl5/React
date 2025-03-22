function DocumentList() {
  return (
    <div>
      <h1>My Uploads</h1>

      <table className="table table-striped-columns">
        <tr>
          <th>Label</th>
          <th>File Name</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>Sales report</td>
          <td>Sales-Sep14.xls</td>
          <td>
            <a href="">Edit</a>
            <a href="">/delete</a>
            <a href="">/share</a>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default DocumentList;
