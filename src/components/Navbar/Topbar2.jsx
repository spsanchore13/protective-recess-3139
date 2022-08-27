import { SearchIcon } from "@chakra-ui/icons";
import { Button, Flex, Img, Input } from "@chakra-ui/react";

import NavMenu from "./NavMenu";

function Topbar2() {
  return (
    <>
      <Flex
        p={10}
        gap={5}
        pt={4}
        pl="40%"
        align="center"
        display={["none", "none", "flex", "flex"]}
      >
        <Img
          w="350px"
          src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwd76d640f/images/svg-icons/Logos-main.svg?yocs=o_s_"
        />
        <Flex border="1px" borderColor="gray" gap={2} w="40%">
          <Input
            pl={2}
            variant="unstyled"
            size="sm"
            placeholder="search by fragrence or product..."
          />
          <Button>
            <SearchIcon />
          </Button>
        </Flex>

        <Img
          boxSize="33px"
          src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiMzNDk4ZGIiPjxwYXRoIGQ9Ik04NiwzLjQ0Yy0xOS4wNDA5NCwwIC0zNC40LDE1LjM1OTA2IC0zNC40LDM0LjR2Ni44OGgtMjcuMTk3NWwtMC4zMjI1LDMuMDFsLTEzLjc2LDEyMC40bC0wLjQzLDMuODdoMTUyLjIybC0wLjQzLC0zLjg3bC0xMy43NiwtMTIwLjRsLTAuMzIyNSwtMy4wMWgtMjcuMTk3NXYtNi44OGMwLC0xOS4wNDA5NCAtMTUuMzU5MDYsLTM0LjQgLTM0LjQsLTM0LjR6TTg2LDEwLjMyYzE1LjM1OTA2LDAgMjcuNTIsMTIuMTYwOTQgMjcuNTIsMjcuNTJ2Ni44OGgtNTUuMDR2LTYuODhjMCwtMTUuMzU5MDYgMTIuMTYwOTQsLTI3LjUyIDI3LjUyLC0yNy41MnpNMzAuNjM3NSw1MS42aDIwLjk2MjV2Ny44NDc1Yy0yLjA1NTk0LDEuMTk1OTQgLTMuNDQsMy4zNzI4MSAtMy40NCw1LjkxMjVjMCwzLjgwMjgxIDMuMDc3MTksNi44OCA2Ljg4LDYuODhjMy44MDI4MSwwIDYuODgsLTMuMDc3MTkgNi44OCwtNi44OGMwLC0yLjUzOTY5IC0xLjM4NDA2LC00LjcxNjU2IC0zLjQ0LC01LjkxMjV2LTcuODQ3NWg1NS4wNHY3Ljg0NzVjLTIuMDU1OTQsMS4xOTU5NCAtMy40NCwzLjM3MjgxIC0zLjQ0LDUuOTEyNWMwLDMuODAyODEgMy4wNzcxOSw2Ljg4IDYuODgsNi44OGMzLjgwMjgxLDAgNi44OCwtMy4wNzcxOSA2Ljg4LC02Ljg4YzAsLTIuNTM5NjkgLTEuMzg0MDYsLTQuNzE2NTYgLTMuNDQsLTUuOTEyNXYtNy44NDc1aDIwLjk2MjVsMTMuMDA3NSwxMTMuNTJoLTEzNi43NHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
        />
      </Flex>
      <NavMenu />
    </>
  );
}

export default Topbar2;
