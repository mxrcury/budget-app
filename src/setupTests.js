import '@testing-library/jest-dom'

import Enzyme,{EnzymeAdapter} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });