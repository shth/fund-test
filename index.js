const boardNodeList = document.querySelectorAll('.board-body')

for (boardElement of boardNodeList) {
  Sortable.create(boardElement, { group: 'board', animation: 150 })
}

function createIssue (text) {
  const issue = document.createElement('div')
  issue.setAttribute('class', 'mui-panel issue')
  issue.innerHTML = text

  return issue
}

function addIssue (text) {
  const backlogBoardBody = document.querySelector('#backlog .board-body')
  const input = document.getElementById('newIssue')
  const issue = createIssue(input.value)
  input.value = ''
  backlogBoardBody.appendChild(issue)
}
