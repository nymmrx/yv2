import React from "react";
import { observer } from "mobx-react-lite";
import { action } from "mobx";

import { BsGearFill } from "react-icons/bs";

import Page from "@comp/layout/Page";
import Container from "@comp/layout/Container";

import Link from "@comp/ui/Link";
import Button from "@comp/ui/Button";
import WalletConnection from "@comp/ui/WalletConnection";
import VaultsTable from "@comp/ui/Vault/Table";
import Modal from "@comp/ui/Modal";

import YearnIcon from "@assets/yearn.svg";

import useUI from "@hooks/stores/useUI";
import ThemeSwitcher from "@comp/ui/ThemeSwitcher";

const Index = observer(function Index() {
  const { isOpen, children, close } = useUI((ui) => ui.modal);

  return (
    <Page>
      <Container>
        <div className="flex items-center">
          <div className="flex-grow flex items-center  text-3xl">
            <YearnIcon className="w-8 h-8 mr-4" />
            <h1 className="hidden sm:block font-light">yearn.finance</h1>
            <h1 className="block sm:hidden font-light">yearn</h1>
          </div>
          <div className="hidden lg:flex flex-grow items-baseline space-x-8">
            <div className="w-24 text-center">
              <Link href="/" active>
                EARN
              </Link>
            </div>
            <div className="w-24 text-center">
              <Link href="/">BORROW</Link>
            </div>
            <div className="w-24 text-center">
              <Link href="/">INSURE</Link>
            </div>
            <div className="w-24 text-center">
              <Link href="/">CREDIT</Link>
            </div>
          </div>
          <div className="flex space-x-2">
            <WalletConnection />
            <ThemeSwitcher />
            <Button className="hidden md:block">
              <BsGearFill className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </Container>
      <Container>
        <div className="container lg:max-w-screen-lg mx-auto">
          <VaultsTable />
        </div>
      </Container>
      <Modal isOpen={isOpen} onDismiss={action(() => close())}>
        <div>{children}</div>
      </Modal>
    </Page>
  );
});

export default Index;
