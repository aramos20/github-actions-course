const core = require ('actions/core');

async function run () {
  try {
    const prTitle = core.getInput('pr-title');
    if (prTitle.startsWith('feat')) {
      core.info('This is a feature PR');
    } else {
      core.setFailed('This is not a feature PR');
    }
  } catch (e) {
    core.setFailed(e.message);
  }
}

run();