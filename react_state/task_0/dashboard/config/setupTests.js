import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'regenerator-runtime/runtime'

// Polyfill for Node runtimes where undici expects a global ReadableStream.
if (typeof global.ReadableStream === 'undefined') {
	const { ReadableStream } = require('stream/web');
	global.ReadableStream = ReadableStream;
}

Enzyme.configure({ adapter: new Adapter() });