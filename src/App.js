import logo from './logo.svg';
import './App.css';
import { Hero7 } from 'heybosscomponentlibrary';

function App() {
  return (
    <div className="App">
      <Hero7
        button1BackgroundColor="bg-indigo-600"
        button1Exist
        button1FontSizeMD="text-lg"
        button1FontSizeSM="text-sm"
        button1FontWeight="font-semibold"
        button1HoverEffectBackground="bg-indigo-700"
        button1HoverEffectScale="scale-110"
        button1HoverEffectShadow="shadow-xs"
        button1HoverTextColor="text-gray-300"
        button1TextColor="text-white"
        button2BackgroundColor="bg-indigo-100"
        button2Exist
        button2FontSizeMD="text-lg"
        button2FontSizeSM="text-sm"
        button2FontWeight="font-semibold"
        button2HoverEffectBackground="bg-indigo-200"
        button2HoverEffectScale="scale-110"
        button2HoverEffectShadow="shadow-xs"
        button2HoverTextColor="text-violet-700"
        button2TextColor="text-indigo-700"
        buttonAlignMD="justify-start"
        buttonAlignSM="justify-center"
        componentHeight={600}
        data={{
          alt: '',
          button1Link: '/',
          button1Text: 'Get started',
          button2Link: '/',
          button2Text: 'Live demo',
          subtitle: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
          title1: 'Data to enrich your',
          title2: 'online business',
          title3: 'and beyond'
        }}
        imageURL="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
        mainBackgroundColor="bg-white"
        subtitleAlignMD="text-left"
        subtitleAlignSM="text-center"
        subtitleFontSizeMD="text-xl"
        subtitleFontSizeSM="text-lg"
        subtitleFontWeight="font-normal"
        subtitleTextColor="text-gray-500"
        title1FontSizeMD="text-6xl"
        title1FontSizeSM="text-5xl"
        title1FontWeight="font-extrabold"
        title1TextColor="text-gray-900"
        title2FontSizeMD="text-6xl"
        title2FontSizeSM="text-5xl"
        title2FontWeight="font-extrabold"
        title2TextColor="text-indigo-600"
        title3FontSizeMD="text-6xl"
        title3FontSizeSM="text-5xl"
        title3FontWeight="font-extrabold"
        title3TextColor="text-blue-400"
        titleAlignMD="text-left"
        titleAlignSM="text-center"
      />
    </div>
  );
}

export default App;
