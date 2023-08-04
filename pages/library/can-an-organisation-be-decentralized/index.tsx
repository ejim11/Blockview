/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Card from "../../../components/Card";
import { Path } from "../../../components/utils/types";

const Daos = () => {
  const prev: Path = {
    path: "decentrallized-finance-(defi)",
  };

  const next: Path = {
    path: "other-use-cases",
  };

  return (
    <Card prev={prev} next={next}>
      <h3 className=" mb-[2rem] font-semibold text-[2.5rem]">
        Decentralized Autonomous Organizations
      </h3>
      <p>
        The governance of Web3 networks and their decentralized application
        consists of two parts: social governance and algorithmic administration
        of governance. Algorithmic administration of governance refers to the
        protocol rules written in machine-readable code - a blockchain protocol
        or smart contract code - which are automatically enforced by the P2P
        network of computers. In an autonomous setup, tokenized incentives are
        at the core of the economic coordination game forming the protocol.
        While Web3 and their applications allow us to automate certain
        bureaucratic functions of organization and formalize institutional rules
        with self-enforcing code, what we write in the code, or how we upgrade
        the code, is a result of public debate and collective action of all
        network agents.
      </p>
      <p className="mt-[1rem]">
        Social governance refers to the human decision-making process over when
        and how to conduct potential protocol upgrades in a Web3 network or in
        the smart contract code of a Decentralized Autonomous Organization
        (DAO). It deals with the institutionalized decision-making process of
        how stakeholders in the network receive necessary information to make
        educated decisions about future protocol upgrades. Discussions over
        protocol upgrades happen on social media, like YouTube, Twitter, Reddit,
        or other open or closed online forums like Slack, Telegram, etc.
        Information is vital for node operators to decide over which protocol
        upgrade to accept. They need to be properly informed to make informed
        decisions. However, navigating in a sea of information, and evaluating
        the authenticity and credibility of that information and signaling is
        difficult.
      </p>
      <p className="bg-[#f1f3f5] p-[2rem] rounded-lg my-[2rem] border-l-4 border-color-light-blue">
        Decentralized Autonomous Organizations (DAOs) are organizations managed
        in whole or in part by decentralized computer program, with voting and
        finances handled through a blockchain. They are co-steered by the human
        agents acting as node operators who all have different preferences and
        goals. They have collective influence over the general network
        behaviour. It is assumed that each stakeholder in the network has their
        own individual self-interest, and that these interests are not always
        fully aligned.
      </p>
      <p>
        Stakeholders in the network propose or vote for policy changes that will
        be formalized as protocol upgrades, reflecting their own self-interest.
        The human agents are part of the system and actively participate in the
        systems, either by using the services of a DAO (users), by contributing
        code to the network constitution (developers), or by contributing to
        maintain network services. In the case of the Bitcoin network, miners
        individually contribute to collective maintenance of a P2P payment
        network. In the case of MakerDAO contributors are rewarded for the
        collective maintenance of the Stable Token DAI. In the case of Aragon
        network actors are/were rewarded for the collective maintenance for a
        DAO platform. As a result, there are feedback-loops between the
        individual actors and the whole network. Since individual actions affect
        the system, who all have interdependencies with external events, the
        system as a whole evolves over time.
      </p>
    </Card>
  );
};

export default Daos;
