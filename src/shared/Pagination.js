import React, { useMemo } from "react";
import { useState } from "react";
import { Box, Button, Center, Text } from "@chakra-ui/react";
import usePreviousStateValue from "../Hooks/usePreviousStateValue";
import { useEffect } from "react";

const Pagination = ({
  totalBlogCount,
  visiblePages,
  blogsPerPage,
  fetchDataFromDB,
  currentPageData, // will be passed as callback from the parent and called here to pass data to parent from this copmonent
  lastFetchedDoc,
  fetchedData,
  selectedQueryKey,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [range, setRange] = useState({
    start: 1,
    end: totalBlogCount >= blogsPerPage ? totalBlogCount : visiblePages,
  });
  const prevCurrentPage = usePreviousStateValue(currentPage);

  const totalPages = Math.ceil(
    totalBlogCount >= blogsPerPage ? totalBlogCount / blogsPerPage : 1
  );
  const shouldShowPagination = totalPages > 1;

  const pageNumbers = useMemo(
    () =>
      Array.from(
        { length: range.end - range.start + 1 },
        (_, i) => range.start + i
      ),
    [range, currentPage, selectedQueryKey]
  );
  const startIndex = currentPage * blogsPerPage - blogsPerPage;
  const lastIndex = currentPage * blogsPerPage;

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    if (Math.floor(pageNumbers?.length / 2) < pageNumbers?.indexOf(pageNum)) {
      const newEnd = range.end + 2;
      const newStart =
        newEnd - visiblePages > 0 ? newEnd - visiblePages + 1 : range.start;
      setRange({
        start: newStart,
        end: newEnd <= totalPages ? newEnd : totalPages,
      });
      fetchDataFromDB && fetchDataFromDB(blogsPerPage * 2, lastFetchedDoc);
    } else if (
      prevCurrentPage > pageNum &&
      Math.floor(pageNumbers?.length / 2) > pageNumbers?.indexOf(pageNum)
    ) {
      if (range.start > 2) {
        setRange({
          start: range.start - 2,
          end: range.end - 2,
        });
      } else {
        setRange({
          start: 1,
          end: visiblePages,
        });
      }
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    setRange({
      start: 1,
      end: totalBlogCount >= blogsPerPage ? blogsPerPage : totalBlogCount,
    });
  }, [selectedQueryKey, totalBlogCount, blogsPerPage]);

  useEffect(() => {
    currentPageData &&
      currentPageData(fetchedData.slice(startIndex, lastIndex));
  }, [fetchedData, lastIndex, startIndex]);

  return (
    <>
      {shouldShowPagination && (
        <Box display={"flex"} justifyContent="center" my="8" px="4">
          <Box display={currentPage > 1 ? "" : "none"}>
            <Button
              variant="trainingButton"
              border="2px solid #faae12"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <Text variant="gradient" textTransform="none">
                Prev
              </Text>
            </Button>
          </Box>
          {pageNumbers
            ?.filter((x) => {
              if (x > 0) {
                if (totalBlogCount > blogsPerPage) {
                  return x <= Math.ceil(totalBlogCount / blogsPerPage);
                }
              } else {
                return totalBlogCount;
              }
            })
            ?.map((page, index) => (
              <Center
                key={index}
                variant="trainingButton"
                mx={[1, 1, 2, 2, 2]}
                mt={["2", "2", "0", "0", "0"]}
                pb={1}
                w={["50px", "50px", "60px", "60px", "60px"]}
                h={["30px", "30px", "40px", "40px", "40px"]}
                borderRadius="2rem"
                bg="gray.300"
                cursor="pointer"
                border={currentPage === page ? "solid 2px #faae01" : null}
                boxShadow={
                  currentPage === page
                    ? "0 0 20px  rgba(255, 174, 0, 0.6)"
                    : null
                }
                onClick={() => handlePageChange(page)}
              >
                <Text
                  fontWeight="extrabold"
                  variant={currentPage === page ? "gradient" : "#fff"}
                >
                  {page}
                </Text>
              </Center>
            ))}
          <Button
            variant="trainingButton"
            border="2px solid #faae12"
            visibility={totalPages > currentPage ? "" : "hidden"}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <Text variant="gradient" textTransform="none">
              Next
            </Text>
          </Button>
        </Box>
      )}
    </>
  );
};

export default Pagination;
