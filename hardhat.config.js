require("@nomicfoundation/hardhat-toolbox");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.8.18",
    networks: {
      sepolia: {
        url: "https://hidden-wider-spring.ethereum-sepolia.discover.quiknode.pro/44ef4690319aa82847a501aa9aca3612a4fcf214/",
        accounts: ["d7153dcec3282e037794ed6c542132d04c770702f4409d00da8140de798dfaad"]
      },
    },
};