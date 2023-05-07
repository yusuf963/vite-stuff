import { withDesign } from 'storybook-addon-designs';
import continueWatchingButtonReadMe from './Introduction.mdx';
export function AdminButton() {
  return (
    <div className="gel-wrap" style={{ paddingTop: 15 }}>
      <div>
        <button>Click me</button>
      </div>
    </div>
  );
}

AdminButton.story = {
  parameters: {
    notes: { markdown: continueWatchingButtonReadMe },
    design: {
      type: 'figma',
      url: 'https://www.figma'
    }
  }
};

export default {
  title: 'Components/Modal',
  decorators: [withDesign]
};
