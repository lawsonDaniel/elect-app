matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]]

def trax(matrix):
    rowLen = len(matrix)
    colLen = len(matrix[0])
    inMat = [[0]* rowLen for _ in range(colLen)]
    for i in range(rowLen):
        for j in range(colLen):
            inMat[j][i] = matrix[i][j]
    return inMat
print(trax(matrix))