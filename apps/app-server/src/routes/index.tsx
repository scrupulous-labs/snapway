import { createFileRoute } from "@tanstack/react-router";
import TextField from "node_modules/@snapway/editor/src/text-field";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return <TextField />;
}
