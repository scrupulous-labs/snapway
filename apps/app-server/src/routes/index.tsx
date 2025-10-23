import { Editor } from "@snapway/editor";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return <Editor />;
}
