import React, { useCallback } from "react";

import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { BsGearFill, BsThreeDots } from "react-icons/bs";

import Page from "@comp/layout/Page";
import Container from "@comp/layout/Container";
import Connection from "@comp/ui/ChainConnection";

import YearnIcon from "@assets/yearn.svg";
import Button from "@comp/ui/Button";

export default function Index() {
  const { activate, deactivate, active, account } = useWeb3React();
  const toggleConnection = useCallback(() => {
    if (active) {
      deactivate();
    } else {
      const injected = new InjectedConnector({ supportedChainIds: [1] });
      activate(injected);
    }
  }, [active]);
  return (
    <Page>
      <Container>
        <div className="flex items-center">
          <div className="flex-grow flex items-center  text-3xl">
            <YearnIcon className="w-8 h-8 mr-4" />
            <h1 className="font-light">yearn.finance</h1>
          </div>
          <div className="flex-grow flex items-baseline gap-8">
            <div className="w-24 text-center">
              <h3 className="text-lg text-white underline">EARN</h3>
            </div>
            <div className="w-24 text-center">
              <h3 className="text-lg text-gray-500">BORROW</h3>
            </div>
            <div className="w-24 text-center">
              <h3 className="text-lg text-gray-500">INSURE</h3>
            </div>
          </div>
          <div className="flex gap-2">
            <Connection
              address={account}
              connected={active}
              onClick={toggleConnection}
            />
            <Button>
              <BsGearFill className="w-4 h-4" />
            </Button>
            <Button>
              <BsThreeDots className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Container>
    </Page>
  );
}
