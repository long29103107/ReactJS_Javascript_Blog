import DataOverview from '../components/DataOverview';
import { Container } from 'reactstrap';
import Chart from '../components/Chart';
import ListOverview from '../components/ListOverview';
import Footer from 'components/admin/Footer';
import InfoOverview from '../components/InfoOverview';
import useScript from 'hooks/useScript';

function Main() {
  const url = window.location.origin;
  let tableList = [];
  for (var i = 0; i < 6; i++) {
    tableList.push(
      <tr key={i}>
        <td>
          <div className='d-flex px-2 py-1'>
            <div>
              <img
                src={url + '/assets/admin/img/small-logos/logo-xd.svg'}
                className='avatar avatar-sm me-3'
                alt='xd'
              />
            </div>
            <div className='d-flex flex-column justify-content-center'>
              <h6 className='mb-0 text-sm'>Soft UI XD Version</h6>
            </div>
          </div>
        </td>
        <td>
          <div className='avatar-group mt-2'>
            <a
              href="" onClick={e=>e.preventDefault()}
              className='avatar avatar-xs rounded-circle'
              data-bs-toggle='tooltip'
              data-bs-placement='bottom'
              title='Ryan Tompson'
            >
              <img src={url + '/assets/admin/img/team-1.jpg'} alt='team1' />
            </a>
            <a
              href="" onClick={e=>e.preventDefault()}
              className='avatar avatar-xs rounded-circle'
              data-bs-toggle='tooltip'
              data-bs-placement='bottom'
              title='Romina Hadid'
            >
              <img src={url + '/assets/admin/img/team-2.jpg'} alt='team2' />
            </a>
            <a
              href="" onClick={e=>e.preventDefault()}
              className='avatar avatar-xs rounded-circle'
              data-bs-toggle='tooltip'
              data-bs-placement='bottom'
              title='Alexander Smith'
            >
              <img src={url + '/assets/admin/img/team-3.jpg'} alt='team3' />
            </a>
            <a
              href="" onClick={e=>e.preventDefault()}
              className='avatar avatar-xs rounded-circle'
              data-bs-toggle='tooltip'
              data-bs-placement='bottom'
              title='Jessica Doe'
            >
              <img src={url + '/assets/admin/img/team-4.jpg'} alt='team4' />
            </a>
          </div>
        </td>
        <td className='align-middle text-center text-sm'>
          <span className='text-xs font-weight-bold'> $14,000 </span>
        </td>
        <td className='align-middle'>
          <div className='progress-wrapper w-75 mx-auto'>
            <div className='progress-info'>
              <div className='progress-percentage'>
                <span className='text-xs font-weight-bold'>60%</span>
              </div>
            </div>
            <div className='progress'>
              <div
                className='progress-bar bg-gradient-info w-60'
                role='progressbar'
                aria-valuenow='60'
                aria-valuemin='0'
                aria-valuemax='100'
              ></div>
            </div>
          </div>
        </td>
      </tr>
    );
  }
  useScript(window.location.origin + "/assets/admin/js/main.js"); 
  return (
    <Container fluid className="py-4">
      <DataOverview />
      <InfoOverview />
      <Chart />
      <ListOverview tableList={tableList} />
      <Footer />
    </Container>
    
  );
}

export default Main;
