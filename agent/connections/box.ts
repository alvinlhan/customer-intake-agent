import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.box.com",
  description: "Search, edit and get insights on your Box content",
  auth: connect("mcp.box.com/customer-intake-agent-box"),
});
