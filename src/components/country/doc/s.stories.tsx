import continueWatchingButtonReadMe from "./Introduction.mdx";
export function AdminButton() {
  return (
    <div className="gel-wrap" style={{ paddingTop: 15 }}>
      <div>hi</div>
    </div>
  );
}

AdminButton.story = {
  parameters: { notes: { markdown: continueWatchingButtonReadMe } },
};

export default {
  title: "Components/ContainedButton",
};
